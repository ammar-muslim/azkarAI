import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { commonAdhkar } from './data/adhkar';
import { Header } from './components/layout/Header';
import { Footer } from './components/Footer';
import { TimelineContainer } from './components/Timeline/TimelineContainer';
import { TimelineItem } from './components/Timeline/TimelineItem';
import { Basmala } from './components/Basmala';
import { useTheme } from './hooks/useTheme';
import { BackgroundPattern } from './components/BackgroundPattern';
import pearl from './images/pearl.png';
export default function App() {
    const [category, setCategory] = useState('morning');
    const { isDark, theme } = useTheme(category);
    return (_jsxs("div", { className: `min-h-screen transition-colors duration-1000 ${theme.background} relative overflow-hidden`, children: [_jsx(BackgroundPattern, { isDark: isDark }), _jsxs("div", { className: "container mx-auto px-4 py-8 relative z-10", children: [_jsx(Header, { category: category, onToggle: setCategory, isDark: isDark }), _jsx(Basmala, { isDark: isDark }), _jsx(TimelineContainer, { isDark: isDark, children: commonAdhkar.map((dhikr, index) => {
                            // هنا نقوم بالتحقق إذا كانت 'text' هي دالة لتحديد النص بناءً على الفئة
                            const text = typeof dhikr.text === 'function' ? dhikr.text(category) : dhikr.text;
                            return (_jsx(TimelineItem, { text: text, count: dhikr.count, reference: dhikr.reference, benefit: dhikr.benefit, isDark: isDark, index: index }, dhikr.id));
                        }) }), _jsx("div", { className: "flex justify-center mt-12 relative z-20", children: _jsx("img", { src: pearl, alt: "Pearl", className: "w-20 h-20" // يمكنك تعديل الحجم هنا حسب الحاجة
                         }) })] }), _jsx(Footer, {})] }));
}
