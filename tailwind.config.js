const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      textColor: ['visited'],
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      textOpacity: ['dark']
    },
  },
  plugins: [],
}
