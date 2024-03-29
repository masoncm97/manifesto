/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xxs: "375px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        offwhite: "#ece5df",
        lemon: "#ffea14",
      },
      keyframes: {
        dash: {
          "100%": { strokeDashoffset: 0 },
        },
      },
      animation: {
        "draw-svg": "dash 2s linear forwards",
      },
    },
  },
  plugins: [],
};
export default config;
