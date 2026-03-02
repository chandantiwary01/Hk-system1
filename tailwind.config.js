/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This creates the "font-inter" utility class
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


module.exports = {
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.3%)' }, // Adjust based on duplication count
        },
      },
    },
  },
}