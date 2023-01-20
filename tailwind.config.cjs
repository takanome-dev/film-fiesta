/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        netflix: 'url("../assets/netflix-bg.jpg")',
        'movie-1': 'url("../assets/movie-bg-1.jpg")',
        'movie-2': 'url("../assets/movie-bg-2.jpg")',
        'movie-3': 'url("../assets/movie-bg-3.jpg")',
      },
    },
  },
  // eslint-disable-next-line global-require
  plugins: [require('@tailwindcss/forms')],
};
