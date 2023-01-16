/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'movie-cover-1': "url('./src/assets/images/movie-1.png')",
        'movie-cover-2': "url('./src/assets/images/movie-2.png')",
        'movie-cover-3': "url('./src/assets/images/movie-3.png')",
        'movie-cover-4': "url('./src/assets/images/movie-4.png')",
        'movie-cover-5': "url('./src/assets/images/movie-5.png')",
        'movie-cover-6': "url('./src/assets/images/movie-6.png')",
      },
    },
  },
  plugins: [],
};
