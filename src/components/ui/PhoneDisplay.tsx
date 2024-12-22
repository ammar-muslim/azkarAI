import React from 'react';
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';

interface PhoneDisplayProps {
  phoneNumber: string;
}

export function PhoneDisplay({ phoneNumber }: PhoneDisplayProps) {
  return (
    <motion.div 
      className="flex items-center gap-2 text-lg opacity-75"
      whileHover={{ scale: 1.02 }}
    >
      <Phone className="w-5 h-5" />
      <span className="font-arabic">{phoneNumber}</span>
    </motion.div>
  );
}