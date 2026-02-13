/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effdf8', 100:'#d9fbf0', 200:'#b7f6e2', 300:'#88eccf', 400:'#52dbb6', 500:'#2ec4a6', 600:'#1ea08b', 700:'#197f73', 800:'#18655e', 900:'#16534f'
        }
      }
    },
  },
  plugins: [],
}
