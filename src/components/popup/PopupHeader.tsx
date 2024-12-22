import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, X } from 'lucide-react';

interface PopupHeaderProps {
  onClose: () => void;
  isDark?: boolean;
}

export function PopupHeader({ onClose, isDark }: PopupHeaderProps) {
  return (
    <>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
      >
        <X size={24} />
      </button>
      
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1 }}
        className={`p-4 rounded-full mb-4 ${
          isDark ? 'bg-cyan-600' : 'bg-amber-500'
        }`}
      >
        <Trophy size={32} className="text-white animate-bounce-slow" />
      </motion.div>
    </>
  );
}