module.exports = {
  purge: ["./**.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("postcss-import"),
    require("tailwindcss"),
    require("postcss-100vh-fix"),
    require("@tailwindcss/typography"),
  ],
};
