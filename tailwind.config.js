/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        main: "acorn",
        raleway: "Raleway",
      },
      colors: {
        main: "#025a4e",
        background: "#ede7de",
      },
    },
  },
  plugins: [],
};
