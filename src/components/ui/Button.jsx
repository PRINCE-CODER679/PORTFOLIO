import { motion } from 'framer-motion';

export function Button({
  children,
  variant = "primary",
  size = "medium",
  onClick,
  className = "",
  disabled = false,
  ...props
}) {
  const variants = {
    primary: {
      background: "bg-gradient-to-r from-blue-600 to-indigo-600",
      hover: "hover:from-blue-500 hover:to-indigo-500",
      text: "text-white"
    },
    secondary: {
      background: "bg-gray-800",
      hover: "hover:bg-gray-700",
      text: "text-white"
    },
    outline: {
      background: "bg-transparent",
      hover: "hover:bg-gray-800/20",
      text: "text-white border border-gray-600"
    }
  };

  const sizes = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg"
  };

  const variantStyles = variants[variant] || variants.primary;
  const sizeStyles = sizes[size] || sizes.medium;

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 transform ${variantStyles.background} ${variantStyles.hover} ${variantStyles.text} ${sizeStyles} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}