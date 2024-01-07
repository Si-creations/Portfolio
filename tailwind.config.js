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
        alt: "#23D997",
        gray: "#D9D9D9",
        gray1: "#242424",
        gray2: "#202020",
        gray3: "#C4C4C4",
        grayOpacity: "rgba(196, 196, 196, 0.2)",
        black: "#000",
        white: "#ECECEC",
        error: "#E54335",
        transparent: "rgba(255,255,255,0)",
      },
      fontFamily: {
        lobster: ["var(--font-lobster)"],
        oswald: ["var(--font-oswald)"],
      },
    },
  },
  plugins: [],
};
