import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/201063555754', '_blank');
  };

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="py-8 mt-12 relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* سيتم حذف هذه الفقرة لأنها لا تؤثر على وضع الأيقونة */}
        </div>
      </div>
      
      {/* إضافة الخلفية */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      
      {/* الأيقونة في أسفل يسار الصفحة مع حجم أصغر */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsAppClick}
        className="fixed bottom-8 left-8 p-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <MessageCircle className="w-5 h-5" />
      </motion.button>
    </motion.footer>
  );
}
