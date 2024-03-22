/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: '#29aff0',
        white: '#ffffff',
      },
      // boxShadow: {
      //   '3xl': '0 0 4px 0 rgba(0, 0, 0, 0.5)',
      // },
    },
  },
  plugins: [],
};
