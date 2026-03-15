/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#F04E23',
          light: '#FF6B3D',
        },
        brand: {
          black: '#111010',
          gray: '#6B6B6B',
          light: '#F5F4F0',
          border: '#E8E6E0',
        },
      },
      fontFamily: {
        sans: ['General Sans', 'Inter', 'sans-serif'],
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease both',
        'fade-up-1': 'fadeUp 0.5s 0.1s ease both',
        'fade-up-2': 'fadeUp 0.5s 0.2s ease both',
        'fade-up-3': 'fadeUp 0.5s 0.3s ease both',
        'fade-up-4': 'fadeUp 0.6s 0.4s ease both',
      },
    },
  },
  plugins: [],
}
