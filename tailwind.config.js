/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: "hsl(216, 12%, 8%)",
        darkBlue: "#1C232D",
        mediumGray: "#262F38",
        lightGray: "hsl(216, 12%, 54%)",
        white: "hsl(0, 0%, 100%)",
        orange: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
