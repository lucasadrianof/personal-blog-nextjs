/* eslint-disable @typescript-eslint/no-var-requires */
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
        home: "url('/background.webp')",
      },
      backgroundPosition: {
        'center-center': 'center-center',
      },
      colors: {
        'brand-background': '#282634',
        'brand-background-element': '#ff4057',
        'brand-slogan': '#DCDCDC',
        gray: {
          850: '#212425',
        },
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
