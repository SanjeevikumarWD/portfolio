/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg-color)",
        text: "var(--text-color)",
        border: "var(--border-color)",
      },
      fontFamily: {
        rosarivo: ["Rosarivo", "cursive"],
        robotoFlex: ["Roboto Flex", "sans-serif"],
      },
      screens: {
        '2xl': '2200px',
        'xs' : '425',
      },
    },
  },
  plugins: [],
};
