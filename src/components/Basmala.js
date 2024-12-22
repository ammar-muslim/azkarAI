import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function Basmala({ isDark }) {
    return (_jsx(motion.div, { initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, className: "text-center mb-12", children: _jsx("h2", { className: `text-4xl font-arabic font-bold ${isDark ? 'text-white' : 'text-cyan-600	'}`, children: " \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u064E\u0651\u0647\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0652\u0645\u064E\u0646\u0650 \u0627\u0644\u0631\u064E\u0651\u062D\u0650\u064A\u0645\u0650" }) }));
}
