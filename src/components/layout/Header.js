import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ThemeToggle } from '../ThemeToggle';
export function Header({ category, onToggle, isDark }) {
    return (_jsxs(motion.header, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-12", children: [_jsxs(motion.h1, { className: `text-6xl font-bold mb-8 font-arabic transition-colors duration-500 ${isDark ? 'text-white' : 'text-cyan-600'}`, initial: { scale: 0.9 }, animate: { scale: 1 }, transition: { duration: 0.5 }, children: ["\u0623\u0630\u0643\u0627\u0631 ", category === 'morning' ? 'الصباح' : 'المساء'] }), _jsx(ThemeToggle, { category: category, onToggle: onToggle })] }));
}
