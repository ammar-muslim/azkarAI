import { jsx as _jsx } from "react/jsx-runtime";
import { motion } from 'framer-motion';
export function DhikrCardContainer({ children, id }) {
    return (_jsx(motion.div, { id: id, initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, className: "relative inline-block" // Here we use inline-block to make the container fit its content
        , children: children }));
}
