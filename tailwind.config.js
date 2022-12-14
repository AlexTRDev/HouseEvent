/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comforta: ['Comfortaa', 'cursive'],
        gentium: ['Gentium Book Basic', 'serif']
      },
    },
  },
  plugins: [require("flowbite/plugin")]
}
