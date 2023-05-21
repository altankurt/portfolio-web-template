/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.js", "./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ["IBM Plex Sans", "sans-serif"],
      },

      fontSize: {
        "3.5xl": "2rem",
      },

      colors: {
        primary: "#141313",
        highlight: "#B86ADF",
      },

      width: {
        68: "17rem",
        76: "19rem",
        78.75: "19.688rem",
        108: "27rem",
        132: "33rem",
        136: "34rem",
      },

      margin: {
        30: "7.5rem",
        70: "17.5rem",
      },

      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
