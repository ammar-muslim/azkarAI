import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  onClick: () => void;
}

export function ContactButton({ onClick }: ContactButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-sky-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <MessageCircle className="w-6 h-6 animate-bounce-slow" />
      <span className="font-arabic text-lg"></span>
    </motion.button>
  );
}