import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { ResetButton } from '../ui/ResetButton';
export function DhikrCardHeader({ reference, isDark, onReset }) {
    return (_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx(motion.div, { className: `text-sm md:text-base font-semibold px-4 py-2 rounded-full truncate max-w-[200px] ${isDark
                    ? 'bg-cyan-600 text-white'
                    : 'bg-cyan-500 text-white'} shadow-md`, children: _jsx("span", { className: "block truncate", children: reference }) }), _jsx(ResetButton, { isDark: isDark, onReset: onReset })] }));
}
