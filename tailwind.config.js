/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#281259",
        primaryPurple: "#6f42c1",
        primaryGold: "#515100",
        primaryPink: "#C04BF2",
        secondaryPurpleLight: "#f4e6fa",
      },
      fontFamily: {
        sans: ["Work Sans"],
        itim: ['"Itim"', "cursive"],
        roboto: ["Roboto"],
        noto: ["Noto Sans NKo", "sans-serif"],
        sourceSans: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
