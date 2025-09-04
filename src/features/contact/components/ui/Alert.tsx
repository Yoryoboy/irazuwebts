interface AlertProps {
  type: "error" | "success" | "info" | "warning";
  message: string;
  className?: string;
}

export const Alert = ({ type, message, className = "" }: AlertProps) => {
  const baseClasses = "rounded-md p-3";
  
  const typeClasses = {
    error: "bg-red-50 text-red-700",
    success: "bg-green-50 text-green-700",
    info: "bg-blue-50 text-blue-700",
    warning: "bg-yellow-50 text-yellow-700",
  };

  const roleAttribute = type === "error" ? "alert" : "status";

  return (
    <div
      role={roleAttribute}
      className={`${baseClasses} ${typeClasses[type]} ${className}`}
    >
      {message}
    </div>
  );
};
