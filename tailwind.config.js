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