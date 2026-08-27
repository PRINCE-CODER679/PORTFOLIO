import { motion } from 'framer-motion';

export function Card({ children, className = "", ...props }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${className} group flex flex-col rounded-xl border border-gray-700 bg-gray-900/50 backdrop-blur-sm px-6 py-4 transition-all duration-300`}
      {...props}
    >
      {children}
    </motion.div>
  );
}