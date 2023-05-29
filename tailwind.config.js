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
                primaryBlue: "#050950",
                primaryPurple: "#2451B7",
                primaryGold: "#B78A24",
                primaryPink: "#4124B7",
                secondaryPurpleLight: "#249BB7",
                secondaryBackground: "#dceee0",
            },
            fontFamily: {
                sans: ["Source Sans Pro"],
                itim: ['"Itim"', "cursive"],
                roboto: ["Roboto"],
                noto: ["Noto Sans NKo", "sans-serif"],
                sourceSans: ["Work Sans", "sans-serif"],
            },
        },
    },
    plugins: [require("taos/plugin")],
    safelist: [
        "!duration-0",
        "!delay-0",
        'html.js :where([class*="taos:"]:not(.taos-init))',
    ],
};


// stratewise colors

//2451B7
// colors: {
//   primaryBlue: "#281259",
//       primaryPurple: "#6f42c1",
//       primaryGold: "#515100",
//       primaryPink: "#C04BF2",
//       secondaryPurpleLight: "#f4e6fa",
//       secondaryBackground: "#dceee0",
// },