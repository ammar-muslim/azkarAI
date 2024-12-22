import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function DhikrCardCounter({ remaining, isDark }) {
    return (_jsx("div", { className: "flex justify-center mt-4", children: _jsx(motion.div, { className: `w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-300 ${remaining === 0
                ? 'bg-gray-200 text-gray-400'
                : isDark
                    ? 'bg-gradient-to-r from-cyan-500 to-cyan-600 text-white shadow-lg'
                    : 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg'}`, children: remaining }) }));
}
