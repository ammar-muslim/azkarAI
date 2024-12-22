import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Trophy, X } from 'lucide-react';
export function PopupHeader({ onClose, isDark }) {
    return (_jsxs(_Fragment, { children: [_jsx("button", { onClick: onClose, className: "absolute top-4 right-4 text-gray-400 hover:text-gray-600", children: _jsx(X, { size: 24 }) }), _jsx(motion.div, { initial: { rotate: 0 }, animate: { rotate: 360 }, transition: { duration: 1 }, className: `p-4 rounded-full mb-4 ${isDark ? 'bg-cyan-600' : 'bg-amber-500'}`, children: _jsx(Trophy, { size: 32, className: "text-white animate-bounce-slow" }) })] }));
}
