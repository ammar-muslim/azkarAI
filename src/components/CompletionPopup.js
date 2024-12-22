import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export function CompletionPopup({ isOpen, onClose, benefit, isDark }) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(onClose, 4000); // اختفاء البوب أب بعد 4 ثوانٍ
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);
    return (_jsx(AnimatePresence, { children: isOpen && (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -100 }, transition: { duration: 0.5, ease: "easeOut" }, className: `fixed top-8 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm z-50 ${isDark ? 'bg-cyan-900/30 text-white' : 'bg-emerald-900/30 text-white'}`, children: _jsx("p", { className: "text-base font-arabic text-center", children: benefit }) })) }));
}
