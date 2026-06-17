/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        rose: {
          50: '#fff5f7',
          100: '#ffe4ea',
          200: '#fecdd8',
          300: '#fda4b8',
          400: '#fb7194',
          500: '#f43f6e',
          600: '#e11d5a',
          700: '#be1249',
          800: '#9f1239',
          900: '#881337',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
          600: '#a8861f',
        },
      },
    },
  },
  plugins: [],
}
