/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["interregular", "ui-sans-serif", "system-ui", "sans-serif"],
        interextrabold: ["interextra_bold"],
        intersemibold: ["intersemi_bold"],
      },
    },
  },
  plugins: [],
};
