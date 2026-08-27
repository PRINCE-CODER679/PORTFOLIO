import { motion } from 'framer-motion';

export function Input({
  type = "text",
  label,
  placeholder = "",
  value,
  onChange,
  error,
  className = "",
  ...props
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`mb-4 ${className}`}
    >
      {label && (
        <label
          htmlFor={label.toLowerCase().replace(/\s+/g, "-")}
          className="mb-2 block text-sm font-medium text-gray-300"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <motion.input
          type={type}
          id={label ? label.toLowerCase().replace(/\s+/g, "-") : undefined}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full px-4 py-3 rounded-lg border border-gray-600 bg-gray-900/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${error ? "border-red-500" : ""}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    </motion.div>
  );
}