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

      width: {
        68: "17rem",
        132: "33rem",
      },
    },
  },
  plugins: [],
};
