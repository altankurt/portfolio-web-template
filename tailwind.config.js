/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ["IBM Plex Sans", "sans-serif"],
      },

      colors: {
        primary: "#141313",
      },
    },
  },
  plugins: [],
};
