import { jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
// 🚀 المكون الأساسي للزر
export function Button({ variant = 'primary', // القيمة الافتراضية هي 'primary'
isDark = false, // القيمة الافتراضية لـ isDark هي false
children, ...props // تمرير بقية الخصائص إلى الزر
 }) {
    // 🛠️ الأنماط الأساسية
    const baseClasses = 'px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-500';
    // 🎨 أنماط كل نوع من الأزرار بناءً على variant و isDark
    const variantClasses = {
        primary: isDark
            ? 'bg-gradient-to-r from-cyan-600 to-cyan-600 text-white hover:shadow-xl'
            : 'bg-gradient-to-r from-cyan-600 to-sky-500 text-white hover:shadow-xl',
        secondary: 'bg-white/80 text-gray-700 hover:bg-white',
    };
    // ✅ اختيار الأنماط بناءً على variant
    const buttonClasses = variantClasses[variant] || variantClasses.primary;
    return (_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: `${baseClasses} ${buttonClasses}`, ...props, children: [children, " "] }));
}
