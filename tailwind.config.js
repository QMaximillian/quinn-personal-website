module.exports = {
  purge: ['./pages/**/*.{js}', './components/**/*.{js}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['first'],
      textColor: ['active'],
      borderColor: ['active'],
    },
  },
  plugins: [],
}
