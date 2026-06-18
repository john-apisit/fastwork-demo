/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#faf8f3',
          100: '#f3ede0',
          200: '#e6d9b8',
          300: '#d4bf8a',
          400: '#c4a55e',
          500: '#b08d3e',
          600: '#967432',
          700: '#785a2a',
          800: '#634a28',
          900: '#543f25',
        },
        forest: {
          50: '#f3f6f4',
          100: '#e1eae4',
          200: '#c4d5ca',
          300: '#9cb5a5',
          400: '#71947c',
          500: '#517760',
          600: '#3f5f4d',
          700: '#344c3f',
          800: '#2c3f35',
          900: '#25342c',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 4px 24px rgba(0, 0, 0, 0.08)',
        card: '0 2px 16px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
}
