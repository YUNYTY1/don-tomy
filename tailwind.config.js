/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0d0a09',
        coal: '#161110',
        brasa: { DEFAULT: '#ad121b', dark: '#8e0e16', deep: '#6f0a10' },
        gold: { DEFAULT: '#f5b71a', soft: '#ffd45e' },
        cream: '#fbf1de',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
        script: ['"Dancing Script"', 'cursive'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'none' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'spin-slow': {
          to: { transform: 'rotate(360deg)' },
        },
        'pulse-ring': {
          '0%': { boxShadow: '0 0 0 0 rgba(245,183,26,.55)' },
          '70%': { boxShadow: '0 0 0 18px rgba(245,183,26,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(245,183,26,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up .8s cubic-bezier(.22,1,.36,1) both',
        'ken-burns': 'ken-burns 14s ease-in-out infinite alternate',
        'spin-slow': 'spin-slow 30s linear infinite',
        'pulse-ring': 'pulse-ring 2.2s ease-out infinite',
        float: 'float 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};