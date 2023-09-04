/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "20px",
    },
    extend: {
      colors: {
        primary: "#7D5A50",
        secondary: "#798777",
        light: "#A2B29F",
        dark: "#594545",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
