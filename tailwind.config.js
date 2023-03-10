/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#B6FFCE",
          200: "#7FFFBD",
          300: "#4FFFB2",
          400: "#1FFFAF",
          500: "#00FF9D",
          600: "#00FF9D",
          700: "#00FF9D",
          800: "#00FF9D",
          900: "#00C897",
        },
      },
    },
  },
  plugins: [],
};
