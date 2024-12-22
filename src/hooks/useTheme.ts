import { Category } from '../types/dhikr';

export function useTheme(category: Category) {
  const isDark = category === 'evening';
  
  return {
    isDark,
    theme: {
      background: isDark 
        ? 'bg-gradient-to-b from-blue-900 via-blue-950 to-slate-950'
        : 'bg-gradient-to-b from-sky-200 via-cyan-300 to-blue-500',
      text: isDark ? 'text-white' : 'text-blue-950',
      accent: isDark ? 'text-blue-400' : 'text-blue-600',
      primary: isDark ? 'bg-blue-600' : 'bg-blue-500',
      secondary: isDark ? 'bg-blue-900/70' : 'bg-blue-600/70',
    }
  };
}