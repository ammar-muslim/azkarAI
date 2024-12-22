import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function TimelineContainer({ children, isDark }) {
    return (_jsxs("div", { className: "relative w-full max-w-6xl mx-auto px-4 py-12", children: [_jsx("div", { className: "flex justify-center mb-12" }), _jsx("div", { className: `absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${isDark ? 'bg-white' : 'bg-white'}` }), children] }));
}
