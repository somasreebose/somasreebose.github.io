/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#818cf8', // Indigo 400 - Softer than Cyan
        secondary: '#1e293b', // Slate 800
        dark: '#0f172a', // Slate 900 - Lighter than 950 for less contrast
        accent: '#22d3ee', // Cyan 400
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
