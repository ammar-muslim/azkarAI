import React from 'react';
import { motion } from 'framer-motion';

interface BasmalaProps {
  isDark: boolean;
}

export function Basmala({ isDark }: BasmalaProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <h2 
        className={`text-4xl font-arabic font-bold ${
          isDark ? 'text-white' : 'text-cyan-600	'
        }`}
      > بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
      </h2>
    </motion.div>
  );
}