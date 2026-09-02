/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#FDFBF7',
          100: '#F9F6F0',
          200: '#EFE9DE',
          300: '#DFD5C4',
          400: '#C9BAA3',
          500: '#B09E83',
          600: '#948166',
          700: '#75654F',
          800: '#5A4D3D',
          900: '#3D3429',
        },
        gold: {
          50: '#FBF9F1',
          100: '#F5F0DB',
          200: '#EBDDB5',
          300: '#DEC488',
          400: '#D1AC5D',
          500: '#C5963B',
          600: '#A67B2A',
          700: '#7D5C1E',
          800: '#5C4417',
          900: '#402F10',
        },
        emeraldTeal: {
          50: '#F0FDF9',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#0D9488',
          600: '#0F766E',
          700: '#115E59',
          800: '#134E4A',
          900: '#082F2C',
        },
        luxuryDark: {
          950: '#0A0E17',
          900: '#0F172A',
          850: '#151E33',
          800: '#1E293B',
          700: '#334155',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        accent: ['"Outfit"', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 20px 40px -15px rgba(15, 23, 42, 0.07)',
        'luxury-hover': '0 30px 60px -15px rgba(15, 23, 42, 0.12)',
        'glow-gold': '0 0 35px -5px rgba(197, 150, 59, 0.3)',
        'glow-teal': '0 0 35px -5px rgba(13, 148, 136, 0.25)',
        'soft-inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.04)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.02)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' }
        }
      }
    },
  },
  plugins: [],
}
