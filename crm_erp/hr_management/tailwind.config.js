/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Noto Sans Thai"', '"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', '"Noto Sans Thai"', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#eef7ff',
          100: '#d9ecff',
          200: '#bcdeff',
          300: '#8ec9ff',
          400: '#59a8ff',
          500: '#3384fc',
          600: '#1d65f1',
          700: '#1550de',
          800: '#1842b4',
          900: '#193a8d',
          950: '#142556',
        },
      },
    },
  },
  plugins: [],
}
