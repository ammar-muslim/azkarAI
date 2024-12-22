import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle({ category, onToggle }) {
    return (_jsxs("div", { className: "flex justify-center gap-4 mb-8", children: [_jsxs("button", { onClick: () => onToggle('morning'), className: `flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${category === 'morning'
                    ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`, children: [_jsx(Sun, { size: 24, className: "animate-spin-slow" }), _jsx("span", { className: "font-bold", children: "\u0627\u0644\u0635\u0628\u0627\u062D" })] }), _jsxs("button", { onClick: () => onToggle('evening'), className: `flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${category === 'evening'
                    ? 'bg-gradient-to-r from-cyan-600 to-cyan-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100'}`, children: [_jsx(Moon, { size: 24, className: "animate-bounce-slow" }), _jsx("span", { className: "font-bold", children: "\u0627\u0644\u0645\u0633\u0627\u0621" })] })] }));
}
