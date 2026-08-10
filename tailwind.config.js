/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    "bg-[#C2C2C2]",
    "bg-[#C3C99E]",
    "bg-[#7D9CA5]",
    "bg-[#C2EBFF]",
    "bg-[#2B2228]",
    "bg-[#C0E5D7]",
    "bg-[#8A97F2]",
    "bg-[#667355]",
    "bg-[#3D4247]",
    "bg-[#42936C]"
    
  ],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#B292FF",
        secondary: "#FFFFFF",
        tertary: "#0C0C0D",
        fourthiary: "#211F23",
        fifthiary: "#717171",
        sixthiary: "#C8C8C8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
