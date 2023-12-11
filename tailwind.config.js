/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",
        alt: "#41D279",
        grey: "#D9D9D9",
        gray1: "#242424",
        grey2: "#202020",
        grey3: "#C4C4C4",
        grey4: "#636363",
        grey5: "#C0C0C0",
        grey6: "#F3F3F3",
        grey7: "#F7F7F7",
        greyOpacity: "rgba(196, 196, 196, 0.2)",
        black: "#000",
        white: "#ECECEC",
        error: "#E54335",
        transparent: "rgba(255,255,255,0)",
      },
    },
  },
  plugins: [require("daisyui")],
};
