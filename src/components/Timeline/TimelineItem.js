import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { DhikrCard } from '../DhikrCard';
export function TimelineItem({ text, count, reference, benefit, isDark, index, onComplete }) {
    const isEven = index % 2 === 0;
    return (_jsxs(motion.div, { initial: { opacity: 0, x: isEven ? -50 : 50 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.5, delay: index * 0.1 }, className: `flex flex-col md:flex-row md:items-center mb-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`, children: [_jsx("div", { className: `w-full md:w-1/2 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`, children: _jsx(DhikrCard, { text: text, count: count, reference: reference, benefit: benefit, isDark: isDark, onComplete: onComplete, index: index }) }), _jsx("div", { className: "relative flex items-center justify-center my-6 md:my-0", children: _jsx(motion.div, { initial: { scale: 0 }, animate: { scale: 1 }, className: `w-8 h-8 rounded-full flex items-center justify-center font-bold text-base ${isDark
                        ? 'bg-white text-cyan-900 shadow-lg shadow-cyan-500/30'
                        : 'bg-white text-cyan-500 shadow-lg shadow-emerald-500/30'}`, children: index + 1 }) }), _jsx("div", { className: "w-full md:w-1/2" })] }));
}
