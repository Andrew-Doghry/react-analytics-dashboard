/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sideBackG: "#F8F9EF",
        cardBack: '#EBECF1'
      },
      width: {
        side: "18vw"
      }
    },
  },
  plugins: [],
}

