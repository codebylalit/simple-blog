/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A90E2", // A modern blue color for buttons
        secondary: "#F5F7FA", // Light background color
        accent: "#FFC107", // A soft accent color
        muted: "#B0BEC5", // A muted gray for text
      },
    },
  },
  plugins: [],
};
