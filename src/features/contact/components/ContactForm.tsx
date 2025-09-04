import { motion } from "framer-motion";
import { useContactForm } from "../hooks/useContactForm";
import { FormField, Button, Alert } from "./ui";

export const ContactForm = () => {
  const { form, submissionState, submitContactForm, formValidation } = useContactForm();
  const { register, handleSubmit, formState: { errors } } = form;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-lg shadow-xl p-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Send Us a Message
      </h2>
      
      <form 
        onSubmit={handleSubmit(submitContactForm)} 
        className="space-y-6" 
        aria-live="polite"
      >
        <FormField
          id="name"
          label="Full Name"
          placeholder="Your name"
          error={errors.name}
          {...register("name", formValidation.name)}
        />

        <FormField
          id="email"
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          error={errors.email}
          {...register("email", formValidation.email)}
        />

        <FormField
          id="subject"
          label="Subject"
          placeholder="What is this regarding?"
          error={errors.subject}
          {...register("subject", formValidation.subject)}
        />

        <FormField
          id="message"
          label="Message"
          type="textarea"
          placeholder="How can we help you?"
          rows={5}
          error={errors.message}
          {...register("message", formValidation.message)}
        />

        {/* Server feedback */}
        {submissionState.error && (
          <Alert type="error" message={submissionState.error} />
        )}
        
        {submissionState.success && (
          <Alert type="success" message={submissionState.success} />
        )}

        <Button
          type="submit"
          loading={submissionState.loading}
          className="w-full"
        >
          {submissionState.loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </motion.div>
  );
};
