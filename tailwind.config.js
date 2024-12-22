/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        arabic: ['Fustat', 'sans-serif'],
      },
      scale: {
        102: '1.02',
        105: '1.05',
      },
      animation: {
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};