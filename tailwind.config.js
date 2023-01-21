// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

console.log({ defaultTheme })
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        home: "url('/background.jpg')",
      },
      container: {
        center: true,
      },
      screens: {
        xs: '350px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
