import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  error?: FieldError;
  rows?: number;
  className?: string;
}

export const FormField = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FormFieldProps & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>
>(({ id, label, type = "text", placeholder, error, rows, className = "", ...props }, ref) => {
  const baseInputClasses = `w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
    error ? "border-red-500" : "border-gray-300"
  } ${className}`;

  const errorId = `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={rows || 5}
          className={baseInputClasses}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          ref={ref as React.Ref<HTMLTextAreaElement>}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={id}
          type={type}
          className={baseInputClasses}
          placeholder={placeholder}
          aria-invalid={!!error}
          aria-describedby={error ? errorId : undefined}
          ref={ref as React.Ref<HTMLInputElement>}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      
      {error && (
        <p id={errorId} role="alert" className="mt-1 text-sm text-red-600">
          {error.message}
        </p>
      )}
    </div>
  );
});
