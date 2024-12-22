import React from 'react';
import { motion } from 'framer-motion';

interface DhikrCardContainerProps {
  children: React.ReactNode;
  id: string;
}

export function DhikrCardContainer({ children, id }: DhikrCardContainerProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative inline-block"  // Here we use inline-block to make the container fit its content
    >
      {children}
    </motion.div>
  );
}
