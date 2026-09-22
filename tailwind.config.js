/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      fontFamily: {
        // Display serif — shared DNA with andsatanlaughed.com + danbarton.me
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Body sans
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // The book site runs darker than its siblings — the page opens in the
        // closet and walks out into the light.
        ink: {
          DEFAULT: '#14110f', // the closet
          soft: '#2a231e',
          muted: '#6b5f53',
        },
        bone: {
          DEFAULT: '#f7f3ec', // cream
          deep: '#ece3d4',
          shade: '#ddd0ba',
        },
        brand: {
          red: '#c0282d',       // AA on bone — carries small text
          'red-deep': '#8f1c20',
          'red-bright': '#ED1C24', // flagship red, display sizes only
          gold: '#c39a3e',      // decorative + display-size text only
          'gold-deep': '#8a6a1d', // small gold text on bone
          'gold-light': '#e0c068', // gold on the dark bands
        },
      },
      maxWidth: {
        prose: '46rem',
      },
      boxShadow: {
        photo: '0 18px 40px -20px rgba(20, 17, 15, 0.6)',
        card: '0 12px 30px -18px rgba(20, 17, 15, 0.4)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
      },
    },
  },
  plugins: [],
};
