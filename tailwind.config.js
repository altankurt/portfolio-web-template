/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ["IBM Plex Sans", "sans-serif"],
      },

      colors: {
        primary: "#141313",
        highlight: "#B86ADF",
      },

      width: {
        68: "17rem",
        76: "19rem",
        132: "33rem",
      },
    },
  },
  plugins: [],
};
