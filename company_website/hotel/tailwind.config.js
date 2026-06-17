/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#faf8f5',
          100: '#f3efe8',
          200: '#e8dfd0',
        },
        ocean: {
          600: '#1a6b7c',
          700: '#155a68',
          800: '#114a56',
          900: '#0d3a44',
        },
        gold: {
          400: '#c9a962',
          500: '#b8943f',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
