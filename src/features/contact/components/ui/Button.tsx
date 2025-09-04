import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  loading = false,
  disabled,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseClasses = "font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: loading || disabled
      ? "bg-blue-400 text-white cursor-not-allowed"
      : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: loading || disabled
      ? "bg-gray-400 text-white cursor-not-allowed"
      : "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
  };

  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      className={combinedClasses}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};
