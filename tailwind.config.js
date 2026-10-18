/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        donut: {
          pink: '#ff4d9d',
          hotpink: '#ff2d86',
          chocolate: '#5b2a1e',
          cocoa: '#7a3b2a',
          cream: '#fff4e6',
          gold: '#ffb347',
          blue: '#3b82f6',
        },
      },
      boxShadow: {
        'glow-pink': '0 0 40px rgba(255,77,157,0.45), 0 0 80px rgba(255,77,157,0.2)',
        'glow-choco': '0 0 40px rgba(91,42,30,0.55), 0 0 80px rgba(122,59,42,0.3)',
        'glow-soft': '0 8px 40px rgba(0,0,0,0.25)',
      },
      backdropBlur: {
        xl: '24px',
      },
      keyframes: {
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(255,77,157,0.4)' },
          '50%': { boxShadow: '0 0 45px rgba(255,77,157,0.75)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        floatY: 'floatY 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        marquee: 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
