/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
module.exports = {
  darkMode: "class", // or 'media'
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff", // Light mode color
        dark: "#000000", // Dark mode color (purple)
        menushadow: "#c8c8c812",
        menushadowlight: "#0000000a",
        textSecondary: "#f6f6f6",
      },
    },
  },
  plugins: [],
};
