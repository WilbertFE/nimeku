/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        primary: "#1a1d26",
        secondary: "#39d7fe",
        third: "#222430",
        fourth: "#4c4d52",
      },
    },
  },
  plugins: [],
};
