import React from 'react';
import { motion } from 'framer-motion';
import { ResetButton } from '../ui/ResetButton';

interface DhikrCardHeaderProps {
  reference?: string;
  isDark?: boolean;
  remaining: number;
  count: number;
  onReset: () => void;
}

export function DhikrCardHeader({ reference, isDark, onReset }: DhikrCardHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <motion.div
        className={`text-sm md:text-base font-semibold px-4 py-2 rounded-full truncate max-w-[200px] ${
          isDark 
            ? 'bg-cyan-600 text-white' 
            : 'bg-cyan-500 text-white'
        } shadow-md`}
      >
        <span className="block truncate">{reference}</span>
      </motion.div>
      <ResetButton isDark={isDark} onReset={onReset} />
    </div>
  );
}