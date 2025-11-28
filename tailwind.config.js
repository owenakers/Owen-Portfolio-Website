/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue
          dark: '#60A5FA',
          light: '#93C5FD'
        },
        secondary: {
          DEFAULT: '#10B981', // Green/Teal
          dark: '#34D399',
          light: '#6EE7B7'
        },
        retro: {
          green: '#00FF41', // Matrix green
          cyan: '#00FFFF',  // Cyan terminal
          amber: '#FFB000', // Amber monitor
          blue: '#00BFFF'   // Retro blue
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
        mono: ['Courier New', 'monospace']
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'scanline': 'scanline 8s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': {
            textShadow: '0 0 10px #00FF41, 0 0 20px #00FF41, 0 0 30px #00FF41',
            filter: 'brightness(1)'
          },
          '100%': {
            textShadow: '0 0 20px #00FF41, 0 0 30px #00FF41, 0 0 40px #00FF41',
            filter: 'brightness(1.2)'
          }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      boxShadow: {
        'retro': '0 0 10px rgba(0, 255, 65, 0.5)',
        'retro-blue': '0 0 10px rgba(59, 130, 246, 0.5)',
        'retro-cyan': '0 0 10px rgba(0, 255, 255, 0.5)',
      }
    }
  },
  plugins: [],
}
