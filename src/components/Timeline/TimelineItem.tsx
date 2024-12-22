import React from 'react';
import { motion } from 'framer-motion';
import { DhikrCard } from '../DhikrCard';

interface TimelineItemProps {
  text: string;
  count: number;
  reference?: string;
  benefit: string;
  isDark: boolean;
  index: number;
  onComplete?: () => void;
}

export function TimelineItem({ text, count, reference, benefit, isDark, index, onComplete }: TimelineItemProps) {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row md:items-center mb-12 ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      <div className={`w-full md:w-1/2 ${
        isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
      }`}>
        <DhikrCard
          text={text}
          count={count}
          reference={reference}
          benefit={benefit}
          isDark={isDark}
          onComplete={onComplete}
          index={index}
        />
      </div>
      
      <div className="relative flex items-center justify-center my-6 md:my-0">
        {/* تغيير لون الرقم إلى أبيض وصغير قليلًا مع النص السماوي */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-base ${
            isDark 
              ? 'bg-white text-cyan-900 shadow-lg shadow-cyan-500/30' 
              : 'bg-white text-cyan-500 shadow-lg shadow-emerald-500/30'
          }`}
        >
          {index + 1}
        </motion.div>
      </div>
      
      <div className="w-full md:w-1/2" />
    </motion.div>
  );
}
