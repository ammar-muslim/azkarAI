export function getProgressBorderStyle(progress: number, isDark?: boolean) {
  return {
    borderWidth: '2px',
    borderStyle: 'solid',
    borderImage: `linear-gradient(90deg, 
      ${isDark ? 'rgba(147, 51, 234, 0.5)' : 'rgba(16, 185, 129, 0.5)'} ${progress * 100}%, 
      transparent ${progress * 100}%
    ) 1`
  };
}