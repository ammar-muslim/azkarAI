import { jsx as _jsx } from "react/jsx-runtime";
import { RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
export function ResetButton({ isDark, onReset }) {
    return (_jsx(motion.button, { whileHover: { scale: 1.1, rotate: 180 }, onClick: onReset, className: `transition-all duration-500 ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-500 hover:text-sky-400'}`, children: _jsx(RefreshCcw, { size: 24 }) }));
}
