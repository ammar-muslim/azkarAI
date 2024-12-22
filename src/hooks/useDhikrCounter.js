import { useState } from 'react';
export function useDhikrCounter({ initialCount, onComplete, index }) {
    const [remaining, setRemaining] = useState(initialCount);
    const [showCompletion, setShowCompletion] = useState(false);
    const progress = (initialCount - remaining) / initialCount;
    const handleCount = (newValue) => {
        if (remaining > 0) {
            setRemaining(newValue);
            if (newValue === 0) {
                setShowCompletion(true);
                setTimeout(() => {
                    onComplete?.();
                    const nextCard = document.getElementById(`dhikr-${index + 1}`);
                    if (nextCard) {
                        nextCard.scrollIntoView({
                            behavior: 'smooth',
                            block: 'center'
                        });
                    }
                }, 300);
            }
        }
    };
    return {
        remaining,
        progress,
        handleCount,
        showCompletion,
        setShowCompletion,
    };
}
