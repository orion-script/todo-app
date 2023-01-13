/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        whiteOne: "#25273c",
        BackOne: "#181824",
      },
      backgroundImage: {
        bigLight: "url('/src/assets/bg-desktop-light.jpg')",
        bigDark: "url('/src/assets/bg-desktop-dark.jpg')",
        smallLight: "url('/src/assets/bg-mobile-light.jpg')",
        smallDark: "url('/src/assets/bg-mobile-dark.jpg')",
      },
    },
  },
  plugins: [],
};
