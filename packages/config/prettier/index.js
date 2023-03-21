/** @type {import("prettier").Config} */
const config = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  endOfLine: "lf",
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};

module.exports = config;
