module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['first'],
      textColor: ['active'],
      borderColor: ['active'],
      borderWidth: ['first', 'last'],
      margin: ['even', 'first', 'last'],
    },
  },
  plugins: [],
  options: {
    keyframes: true,
  },
}
