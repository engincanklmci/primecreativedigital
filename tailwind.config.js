/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        prime: {
          white: '#F8F8F6', // Pearl White - slightly warmer/softer
          black: '#2C2C2C', // Soft Charcoal Black
          yellow: '#E3AB1E', // Vanilla/Soft Yellow
          accent: '#FFD700', // A bit stronger gold/yellow for highlights if needed
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern, clean
      }
    },
  },
  plugins: [],
}
