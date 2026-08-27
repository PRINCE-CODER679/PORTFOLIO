import React from 'react';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export function AnimatedCounter({
  start = 0,
  end = 0,
  duration = 2,
  prefix = '$',
  suffix = '',
  decimals = 0
}) {
  const [count, setCount] = React.useState(start);
  const [isMounted, setIsMounted] = React.useState(false);

  useEffect(() => {
    setIsMounted(true);

    const timer = setTimeout(() => {
      let elapsed = 0;
      const interval = setInterval(() => {
        elapsed += 16; // ~60fps
        const progress = Math.min(elapsed / (duration * 1000), 1);

        // Easing function (easeOutCubic)
        const easedProgress = 1 - Math.pow(1 - progress, 3);

        const currentValue = start + (end - start) * easedProgress;
        const formattedValue = decimals > 0
          ? currentValue.toFixed(decimals)
          : Math.round(currentValue);

        setCount(formattedValue);

        if (progress >= 1) {
          clearInterval(interval);
        }
      }, 16);
    }, 300); // Small delay before starting

    return () => {
      clearTimeout(timer);
    };
  }, [start, end, duration, decimals]);

  if (!isMounted) return null;

  return (
    <motion.span
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="text-3xl font-bold text-white transitional-transform duration-300"
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
}