import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResetButton } from "./ui/ResetButton";
import { CompletionPopup } from "./CompletionPopup";
export function DhikrCard({ text, count, reference, benefit, isDark, onComplete, index, }) {
    const [remaining, setRemaining] = useState(count);
    const [showCompletion, setShowCompletion] = useState(false);
    const [filledSquares, setFilledSquares] = useState([]);
    const progress = ((count - remaining) / count) * 100;
    const calculateGridDimensions = (count) => {
        const baseSquares = count <= 100 ? count * 1.5 : count * 1.2;
        const columns = Math.ceil(Math.sqrt(baseSquares));
        const rows = Math.ceil(baseSquares / columns);
        return { columns, rows, totalSquares: columns * rows };
    };
    const { columns, rows, totalSquares } = useMemo(() => calculateGridDimensions(count), [count]);
    const calculateSquaresPerClick = (remaining, filledCount) => {
        const remainingSquares = totalSquares - filledCount;
        const averageSquaresPerClick = Math.ceil(remainingSquares / remaining);
        const variance = Math.floor(averageSquaresPerClick * 0.2); // ±20% of the average
        const minSquares = Math.max(1, averageSquaresPerClick - variance);
        const maxSquares = Math.min(remainingSquares, averageSquaresPerClick + variance);
        return (Math.floor(Math.random() * (maxSquares - minSquares + 1)) + minSquares);
    };
    const handleCount = () => {
        if (remaining > 0) {
            setRemaining((prev) => {
                const newValue = prev - 1;
                if (newValue === 0) {
                    setShowCompletion(true);
                    setTimeout(() => {
                        onComplete?.();
                        const nextCard = document.getElementById(`dhikr-${index + 1}`);
                        if (nextCard) {
                            nextCard.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });
                        }
                    }, 300); // تم تقليل التأخير هنا
                }
                return newValue;
            });
            setFilledSquares((prev) => {
                const squaresToAdd = calculateSquaresPerClick(remaining, prev.length);
                const availableSquares = Array.from({ length: totalSquares })
                    .map((_, i) => i)
                    .filter((i) => !prev.includes(i));
                const newSquares = availableSquares
                    .sort(() => Math.random() - 0.5)
                    .slice(0, squaresToAdd);
                return [...prev, ...newSquares];
            });
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs(motion.div, { id: `dhikr-${index}`, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "relative rounded-2xl p-6 backdrop-blur-md overflow-hidden", style: {
                    backgroundColor: isDark ? "#1f2937" : "#ffffff",
                    color: isDark ? "#ffffff" : "#1f2937",
                    minHeight: "auto",
                    padding: "20px",
                }, children: [_jsx("div", { className: "absolute inset-0 z-10 grid pointer-events-none", style: {
                            gridTemplateColumns: `repeat(${columns}, 1fr)`,
                            gridTemplateRows: `repeat(${rows}, 1fr)`,
                            gap: "2px",
                            padding: "4px",
                        }, children: Array.from({ length: totalSquares }).map((_, i) => (_jsx(motion.div, { className: "square", style: {
                                backgroundColor: filledSquares.includes(i)
                                    ? "rgba(221, 221, 221, 0.5)"
                                    : "transparent",
                                transition: "all 0.05s ease-in-out", // تم تقليل المدة هنا
                                borderRadius: "4px",
                                boxShadow: filledSquares.includes(i)
                                    ? "inset 0 2px 4px rgba(0,0,0,0.2)"
                                    : "none",
                            }, initial: { opacity: 0, scale: 0 }, animate: filledSquares.includes(i)
                                ? { opacity: 1, scale: 1, rotate: Math.random() * 6 - 3 }
                                : { opacity: 0, scale: 0 }, transition: {
                                duration: 0.1, // تسريع الحركة هنا
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                            } }, i))) }), _jsxs("div", { className: "relative z-20", children: [_jsxs("div", { className: "flex justify-between items-center mb-4", children: [_jsx(motion.div, { whileHover: { scale: 1.05 }, className: `text-sm md:text-base font-semibold px-4 py-2 rounded-full truncate max-w-[200px] ${isDark ? "bg-cyan-600 text-white" : "bg-cyan-500 text-white"} shadow-md`, children: _jsx("span", { className: "block truncate", children: reference }) }), _jsx(ResetButton // سطر 157
                                    , { isDark: isDark, onReset: () => {
                                            setRemaining(count);
                                            setFilledSquares([]);
                                        } })] }), _jsx(motion.p, { className: "text-base md:text-xl leading-relaxed mb-6 text-center font-arabic whitespace-pre-line", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.2 }, children: typeof text === "function"
                                    ? text(isDark ? "evening" : "morning")
                                    : text }), _jsx("div", { className: "flex justify-center", children: _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: handleCount, disabled: remaining === 0, className: `w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold transition-all duration-500 ${remaining === 0
                                        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                                        : isDark
                                            ? "bg-gradient-to-r from-cyan-600 to-cyan-700 text-white hover:shadow-xl"
                                            : "bg-gradient-to-r from-cyan-500 to-sky-500 text-white hover:shadow-xl"}`, children: remaining }) })] }), _jsx("div", { className: "absolute bottom-0 left-0 w-full h-2 bg-gray-200 rounded-full overflow-hidden z-30", children: _jsx(motion.div, { className: "h-full", style: {
                                background: `linear-gradient(90deg, #1e3a8a, #2563eb, #3b82f6, #60a5fa)`,
                                width: `${progress}%`,
                            }, transition: { duration: 1.5, ease: "easeInOut" } }) })] }), _jsx(AnimatePresence, { children: showCompletion && (_jsx(motion.div, { className: "fixed top-0 left-0 right-0 z-50 flex items-center justify-center", initial: { y: "-100%" }, animate: { y: "20%" }, exit: { y: "-100%" }, transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                    }, children: _jsx(CompletionPopup, { isOpen: showCompletion, onClose: () => setShowCompletion(false), benefit: benefit, isDark: isDark }) })) })] }));
}
