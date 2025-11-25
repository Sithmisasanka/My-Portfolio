/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        dark: {
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.875rem', { lineHeight: '1.5rem' }],
        'sm': ['1rem', { lineHeight: '1.75rem' }],
        'base': ['1.125rem', { lineHeight: '2rem' }],
        'lg': ['1.25rem', { lineHeight: '2.25rem' }],
        'xl': ['1.5rem', { lineHeight: '2.5rem' }],
        '2xl': ['1.75rem', { lineHeight: '2.75rem' }],
        '3xl': ['2rem', { lineHeight: '3rem' }],
        '4xl': ['2.5rem', { lineHeight: '3.5rem' }],
        '5xl': ['3.25rem', { lineHeight: '4rem' }],
        '6xl': ['4rem', { lineHeight: '4.5rem' }],
        '7xl': ['5rem', { lineHeight: '5.5rem' }],
        '8xl': ['6rem', { lineHeight: '6.5rem' }],
        '9xl': ['8rem', { lineHeight: '8.5rem' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}