import { useState } from "react";
import { useForm } from "react-hook-form";
import type { ContactFormData, FormSubmissionState } from "../types";

const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const useContactForm = () => {
  const [submissionState, setSubmissionState] = useState<FormSubmissionState>({
    loading: false,
    error: null,
    success: null,
  });

  const form = useForm<ContactFormData>();

  const submitContactForm = async (data: ContactFormData) => {
    setSubmissionState({
      loading: true,
      error: null,
      success: null,
    });

    try {
      const baseUrlRaw =
        import.meta.env?.VITE_SUPABASE_FUNCTIONS_URL ??
        "http://localhost:54321/functions/v1";

      // Normalize base URL (remove trailing slash)
      const baseUrl = baseUrlRaw.replace(/\/$/, "");

      // Build endpoint robustly. If the env already includes the function path, don't append it again.
      const endpoint = /\/send-contact-email$/.test(baseUrl)
        ? baseUrl
        : `${baseUrl}/send-contact-email`;

      // When verify_jwt=true (default in production), the Edge Function requires an Authorization header.
      // Use the public anon key from the environment.
      const anonKey = import.meta.env?.VITE_SUPABASE_ANON_KEY as
        | string
        | undefined;

      // Proactive runtime hint if misconfigured in production
      if (!anonKey && /\.functions\.supabase\.co$/.test(new URL(endpoint).host)) {
        throw new Error(
          "Supabase anon key missing. Please set VITE_SUPABASE_ANON_KEY in your hosting env."
        );
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // For Supabase Functions with verify_jwt enabled, send both Authorization and apikey headers.
          ...(anonKey
            ? { Authorization: `Bearer ${anonKey}`, apikey: anonKey }
            : {}),
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || `Request failed with ${response.status}`);
      }

      setSubmissionState({
        loading: false,
        error: null,
        success: "Thank you for your message! We will get back to you soon.",
      });

      form.reset();
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      setSubmissionState({
        loading: false,
        error: message || "Something went wrong. Please try again later.",
        success: null,
      });
    }
  };

  const formValidation = {
    name: { required: "Name is required" },
    email: {
      required: "Email is required",
      pattern: {
        value: EMAIL_REGEX,
        message: "Invalid email address",
      },
    },
    subject: { required: "Subject is required" },
    message: { required: "Message is required" },
  };

  return {
    form,
    submissionState,
    submitContactForm,
    formValidation,
  };
};
