/** @type {import("tailwindcss").Config} */
const config = {
  content: ["./src/**/*.tsx"],
  // @ts-ignore
  presets: [require("@acme/tailwind-config")],
  theme: {
    extend: {
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(220px, 1fr))",
        details: "repeat(auto-fit, minmax(350px, 1fr))",
      },
      screens: {
        xs: "480px",
      },
      backgroundImage: {
        netflix: 'url("../assets/netflix-bg.jpg")',
        "movie-1": 'url("../assets/movie-bg-1.jpg")',
        "movie-2": 'url("../assets/movie-bg-2.jpg")',
        "movie-3": 'url("../assets/movie-bg-3.jpg")',
        lost: 'url("../assets/lost-bg.jpeg")',
      },
    },
  },
};

module.exports = config;
