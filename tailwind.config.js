/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        avengers: "url('../resources/Avengers.png')",
        guardians: "url('../resources/Guardians of The Galaxy.png')",
        knives: "url('../resources/Knives Out.png')",
        spider: "url('../resources/Spider Man.png')",
        tenet: "url('../resources/Tenet.png')",
      },
      colors: {
        'cyan-1': '#C8E0F4',
      },
    },
  },
  plugins: [],
}