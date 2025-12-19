import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Kolory Dworu Bartnika - zgodne z oryginalną stroną
      colors: {
        primary: {
          50: '#fdfaf5',
          100: '#f9f0e0',
          200: '#f2e1c4',
          300: '#e8cda0',
          400: '#d3b883', // główny złoty - z oryginalnej strony
          500: '#c4a66e',
          600: '#a5823c', // ciemny złoty - z oryginalnej strony
          700: '#8a6b30',
          800: '#6f5526',
          900: '#5a451f',
          950: '#3a2c14',
        },
        accent: {
          50: '#f8f8f6',
          100: '#efefe9',
          200: '#e0dfd3',
          300: '#ccc9b5',
          400: '#b5b094',
          500: '#9f9878',
          600: '#8a8263',
          700: '#726b52',
          800: '#5f5946',
          900: '#514c3d',
          950: '#2b2820',
        },
        wood: {
          light: '#d4a574',
          DEFAULT: '#8b6914',
          dark: '#5c4a1f',
        },
        honey: {
          light: '#f5e6c8',
          DEFAULT: '#d3b883',
          dark: '#a5823c',
        },
      },
      fontFamily: {
        // Fonty self-hosted przez next/font/google (CSS variables)
        cursive: ['var(--font-great-vibes)', 'cursive'],
        sans: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero/menu-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
