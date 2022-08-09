/** @type {import('tailwindcss').Config} */

const colors = {
  colortest: "#fb8500",
  transparent: "transparent",
  darkgrey: "#403d39",
  softwhite: "#f5f4ee",
};

module.exports = {
  colors,
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colors,
      fontFamily: {
        saira: ["Saira"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
