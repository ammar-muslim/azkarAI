import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  category: 'morning' | 'evening';
  onToggle: (category: 'morning' | 'evening') => void;
}

export function ThemeToggle({ category, onToggle }: ThemeToggleProps) {
  return (
    <div className="flex justify-center gap-4 mb-8">
      <button
        onClick={() => onToggle('morning')}
        className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${
          category === 'morning'
            ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        <Sun size={24} className="animate-spin-slow" />
        <span className="font-bold">الصباح</span>
      </button>
      <button
        onClick={() => onToggle('evening')}
        className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${
          category === 'evening'
            ? 'bg-gradient-to-r from-cyan-600 to-cyan-600 text-white shadow-lg'
            : 'bg-white text-gray-700 hover:bg-gray-100'
        }`}
      >
        <Moon size={24} className="animate-bounce-slow" />
        <span className="font-bold">المساء</span>
      </button>
    </div>
  );
}
