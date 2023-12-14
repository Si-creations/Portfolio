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
        gray: "#D9D9D9",
        gray1: "#242424",
        gray2: "#202020",
        gray3: "#C4C4C4",
        gray4: "#636363",
        gray5: "#C0C0C0",
        gray6: "#F3F3F3",
        gray7: "#F7F7F7",
        grayOpacity: "rgba(196, 196, 196, 0.2)",
        black: "#000",
        white: "#ECECEC",
        error: "#E54335",
        transparent: "rgba(255,255,255,0)",
      },
    },
  },
  plugins: [require("daisyui")],
};
