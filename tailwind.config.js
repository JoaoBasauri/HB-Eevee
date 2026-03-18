/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: "#F9A8D4",
        softPink: "#FCE7F3",
        roseText: "#BE185D",
        lightPink: "#FBCFE8",
        strongPink: "#EC4899",
      },
      fontFamily: {
        romantic: ["cursive"],
      },
    },
  },
  plugins: [],
}

