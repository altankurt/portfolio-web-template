/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: ["IBM Plex Sans", "sans-serif"],
      },

      colors: {
        bgPrimary: "#FFFFFF",
        bgSecondary: "#141313",
      },
    },
  },
  plugins: [],
};
