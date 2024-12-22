import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
export function Footer() {
    const handleWhatsAppClick = () => {
        window.open('https://wa.me/201063555754', '_blank');
    };
    return (_jsxs(motion.footer, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "py-8 mt-12 relative overflow-hidden", children: [_jsx("div", { className: "container mx-auto px-4", children: _jsx("div", { className: "flex justify-center" }) }), _jsx("div", { className: "absolute inset-0 -z-10 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" }), _jsx(motion.button, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, onClick: handleWhatsAppClick, className: "fixed bottom-8 left-8 p-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-xl transition-all duration-300", children: _jsx(MessageCircle, { className: "w-5 h-5" }) })] }));
}
