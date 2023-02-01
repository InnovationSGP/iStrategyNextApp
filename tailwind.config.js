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
        primaryBlue: "#000051",
        primaryPurple: "#a881af",
        primaryGold: "#515100",
        primaryPink: "#ff6a95",
      },
      fontFamily: {
        sans: [
          '"Roboto"',
          '"Helvetica Neue"',
          ' "Work Sans"',
          '"Noto Sans"',
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        itim: ['"Itim"', "cursive"],
      },
    },
  },
  plugins: [],
};
