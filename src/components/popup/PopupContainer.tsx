import React from 'react';
import { motion } from 'framer-motion';

interface PopupContainerProps {
  children: React.ReactNode;
  onClose: () => void;
  isDark?: boolean;
}

export function PopupContainer({ children, onClose, isDark }: PopupContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.5, opacity: 0 }}
        className={`relative p-6 rounded-2xl shadow-2xl max-w-md w-full ${
          isDark ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}