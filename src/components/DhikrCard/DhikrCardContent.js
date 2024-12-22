import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function DhikrCardContent({ text, isDark, onClick, benefit }) {
    return (_jsxs(motion.div, { className: `relative rounded-2xl p-6 backdrop-blur-md transition-all duration-300 cursor-pointer ${isDark
            ? 'bg-gray-800/90 text-white'
            : 'bg-white/90 text-gray-800'}`, onClick: onClick, whileTap: { scale: 0.98 }, children: [_jsx("div", { className: `absolute top-0 left-0 right-0 py-2 px-4 rounded-t-2xl text-center ${isDark ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'}`, children: benefit }), _jsx(motion.p, { className: "text-base md:text-xl leading-relaxed mb-6 text-center font-arabic whitespace-pre-line mt-8" // Added margin-top for spacing
                , initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, children: typeof text === 'function' ? text(isDark ? 'evening' : 'morning') : text })] }));
}
