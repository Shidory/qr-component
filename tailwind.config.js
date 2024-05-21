/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",],
  theme: {
    extend: {
      colors: {
        grayishBlue: 'hsl(220, 15%, 55%)',
        whiteCustom: 'hsl(0, 0%, 100%)',
        darkBlue: 'hsl(218, 44%, 22%)'
      },
    },
  },
  plugins: [],
}

