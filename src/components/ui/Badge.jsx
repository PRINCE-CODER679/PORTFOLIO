export function Badge({ children, variant = "default", className = "" }) {
  const variants = {
    default: "bg-gray-800/50 text-gray-300",
    primary: "bg-blue-600/20 text-blue-400",
    secondary: "bg-purple-600/20 text-purple-400",
    success: "bg-green-600/20 text-green-400",
    warning: "bg-yellow-600/20 text-yellow-400",
    error: "bg-red-600/20 text-red-400"
  };

  const variantClass = variants[variant] || variants.default;

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${variantClass} ${className}`}>
      {children}
    </span>
  );
}