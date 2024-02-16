/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: "Roboto, sans-serif",
    },
    extend: {
      colors: {
        primary: "#1a1d26",
        secondary: "#39d7fe",
      },
    },
  },
  plugins: [],
};
