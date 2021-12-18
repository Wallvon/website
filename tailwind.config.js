const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: colors.white,
      black: colors.black,
      gray: colors.zinc,
      rose: colors.rose
    },
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk']
      }
    }
  },
  plugins: []
}
