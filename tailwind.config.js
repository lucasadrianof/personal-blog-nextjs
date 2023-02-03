// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        title: 'title 5s linear infinite',
      },
      backgroundImage: {
        home: "url('/background.jpg')",
      },
      container: {
        center: true,
      },
      keyframes: {
        title: {
          '0%': { content: `"Software Engineer"` },
          '50%': { content: `"Problem Solver"` },
          '100%': { content: `"Beer Enthusiast"` },
        },
      },
      screens: {
        xs: '350px',
        ...defaultTheme.screens,
      },
    },
  },
  plugins: [],
}
