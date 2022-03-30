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
        sans: ["'ProximaRegular'", ...fontFamily.sans],
        Quattro: 'Quattro',
        QuattroBold: 'QuattroBold',
        IBMSans: 'IBMSans'
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
