import { useState } from 'react';

interface UseDhikrCounterProps {
  initialCount: number;
  onComplete?: () => void;
  index: number;
}

export function useDhikrCounter({ initialCount, onComplete, index }: UseDhikrCounterProps) {
  const [remaining, setRemaining] = useState(initialCount);
  const [showCompletion, setShowCompletion] = useState(false);

  const progress = (initialCount - remaining) / initialCount;

  const handleCount = (newValue: number) => {
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