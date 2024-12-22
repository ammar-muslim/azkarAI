import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Phone } from 'lucide-react';
import { motion } from 'framer-motion';
export function PhoneDisplay({ phoneNumber }) {
    return (_jsxs(motion.div, { className: "flex items-center gap-2 text-lg opacity-75", whileHover: { scale: 1.02 }, children: [_jsx(Phone, { className: "w-5 h-5" }), _jsx("span", { className: "font-arabic", children: phoneNumber })] }));
}
