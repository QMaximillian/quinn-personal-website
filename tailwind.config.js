module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class',
  preserveHtmlElements: false,
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
  options: {
    keyframes: true,
  },
}
