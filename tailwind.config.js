/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5f5',
          100: '#f0e6e7',
          200: '#e1cfd0',
          300: '#c9adaf',
          400: '#b08588',
          500: '#95656a',
          600: '#7D2027', // Brand color - Burgundy
          700: '#6a2128',
          800: '#591e24',
          900: '#4c1d22',
          950: '#290d11',
        },
        secondary: {
          50: '#fbf9e8',
          100: '#f7f2c7',
          200: '#f2e692',
          300: '#ead354',
          400: '#e4c231',
          500: '#D4AF37', // Gold
          600: '#bb8c1e',
          700: '#9a6919',
          800: '#805219',
          900: '#6d461a',
          950: '#3f240c',
        },
        wood: {
          50: '#fbf9f2',
          100: '#f5efe0',
          200: '#e9dbc1',
          300: '#d9c098',
          400: '#c9a06f',
          500: '#bd8652', // Wood tone
          600: '#b06e45',
          700: '#93563a',
          800: '#774633',
          900: '#623b2d',
          950: '#351d17',
        },
        success: '#22c55e',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};