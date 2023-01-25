/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // container: {
      //   center: true,
      //   padding: "1.5rem",
      //   screens: {
      //     "2xl": "1440px",
      //   },
      // },
      fontFamily: {
        sans: ['var(--font-sans)', ...fontFamily.sans],
      },
      backgroundImage: {
        netflix: 'url("../assets/netflix-bg.jpg")',
        'movie-1': 'url("../assets/movie-bg-1.jpg")',
        'movie-2': 'url("../assets/movie-bg-2.jpg")',
        'movie-3': 'url("../assets/movie-bg-3.jpg")',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-radix')({
      variantPrefix: 'rdx',
    }),
    require('tailwindcss-animate'),
  ],
};
