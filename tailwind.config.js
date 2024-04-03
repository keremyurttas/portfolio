/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "bg-[#C2C2C2]",
    "bg-[#C3C99E]",
    "bg-[#7D9CA5]",
    "bg-[#42936C]",
    "bg-[#428593]",
    "bg-[#C0E5D7]",
  ],
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
        fifthiary: "#717171",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
