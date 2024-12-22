import React from 'react';
import { motion } from 'framer-motion';
import { ThemeToggle } from '../ThemeToggle';
import { Category } from '../../types/dhikr';

interface HeaderProps {
  category: Category;
  onToggle: (category: Category) => void;
  isDark: boolean;
}

export function Header({ category, onToggle, isDark }: HeaderProps) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-12"
    >
      <motion.h1 
        className={`text-6xl font-bold mb-8 font-arabic transition-colors duration-500 ${
          isDark ? 'text-white' : 'text-cyan-600'
        }`}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        أذكار {category === 'morning' ? 'الصباح' : 'المساء'}
      </motion.h1>
      
      <ThemeToggle category={category} onToggle={onToggle} />
    </motion.header>
  );
}