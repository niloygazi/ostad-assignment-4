/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sidebarBG: "#F1F2F7",
        brand: "#5A67BA",
        text: "#082431",
        border: "#C8CBD9",
        hover: "#707FDD",
        buttonClr: "#A6ABC8",
        price: "#A855F7",
      },
      container: {
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
