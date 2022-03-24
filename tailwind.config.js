const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ["'IBMSans'", ...fontFamily.sans],
        Quattro: 'Quattro',
        QuattroBold: 'QuattroBold'
      },
    },
  },
  plugins: [],
}
