/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#006FEA",
        accent: "#83BEFF",
        dark: "#081426",
        light: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
         monument: ["MonumentExtended", "sans-serif"],
      },
    },
  },
  plugins: [],
};
