import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Fish, Shell } from 'lucide-react';
export function BackgroundPattern({ isDark }) {
    return (_jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: `absolute inset-x-0 top-0 h-[50vh] bg-gradient-to-b ${isDark ? 'from-blue-900/30 to-transparent' : 'from-yellow-100/50 to-transparent'} transition-colors duration-1000` }), _jsx("div", { className: `absolute inset-0 bg-gradient-to-b ${isDark ? 'from-transparent via-blue-950/50 to-blue-950/80' : 'from-transparent via-cyan-100/30 to-cyan-900/30'} transition-colors duration-1000` }), [...Array(30)].map((_, i) => (_jsx(motion.div, { className: `absolute rounded-full ${isDark ? 'bg-white/5' : 'bg-white/20'}`, style: {
                    width: Math.random() * 30 + 10, // عشوائية في الحجم
                    height: Math.random() * 30 + 10, // عشوائية في الحجم
                    left: `${Math.random() * 100}%`, // عشوائية في الموقع الأفقي
                    bottom: `-${Math.random() * 20}%`, // عشوائية في الموقع الرأسي
                }, animate: {
                    y: [0, -1000], // الحركة للأعلى
                    x: [0, Math.random() * 100 - 50], // حركة عشوائية أفقياً
                }, transition: {
                    duration: Math.random() * 10 + 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 20,
                } }, `bubble-${i}`))), [...Array(5)].map((_, i) => (_jsx(motion.div, { className: "absolute", style: {
                    top: `${20 + Math.random() * 60}%`, // عشوائية في موقع السمك
                }, animate: {
                    x: [-100, window.innerWidth + 100], // حركة السمك
                    rotate: 0,
                }, transition: {
                    duration: Math.random() * 20 + 20,
                    repeat: Infinity,
                    ease: "linear",
                    delay: Math.random() * 10,
                }, children: _jsx(Fish, { className: `w-8 h-8 ${isDark ? 'text-white/20' : 'text-blue-900/20'}` }) }, `fish-${i}`))), [...Array(8)].map((_, i) => (_jsx(motion.div, { className: `absolute top-0 h-[40vh] w-4 origin-top ${isDark ? 'bg-blue-100/[0.02]' : 'bg-yellow-100/[0.05]'}`, style: {
                    left: `${(i / 8) * 100}%`,
                    transform: `rotate(${-20 + Math.random() * 40}deg)`, // تأثير الدوران العشوائي
                }, animate: {
                    opacity: [0.5, 0.8, 0.5],
                }, transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                } }, `ray-${i}`))), _jsx(motion.div, { className: "absolute bottom-20 left-1/2 -translate-x-1/2", animate: {
                    scale: [1, 1.1, 1],
                    opacity: [0.8, 1, 0.8],
                }, transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }, children: _jsx(Shell, { className: `w-12 h-12 ${isDark ? 'text-white/30' : 'text-blue-900/30'}` }) })] }));
}
