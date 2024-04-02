/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B292FF",
        secondary: "#FFFFFF",
        tertary: "#0C0C0D",
        fourthiary: "#211F23",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
