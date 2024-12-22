import React from 'react';
import { RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResetButtonProps {
  isDark?: boolean;
  onReset: () => void;
}

export function ResetButton({ isDark, onReset }: ResetButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.1, rotate: 180 }}
      onClick={onReset}
      className={`transition-all duration-500 ${
        isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-500 hover:text-sky-400'
      }`}
    >
      <RefreshCcw size={24} />
    </motion.button>
  );
}