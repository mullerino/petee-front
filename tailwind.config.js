/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#016f71",
        "secondary": "#019497",
        "shade-0": "#f5f1ed",
        "green-50": "#d6e7e9",
        "gradient-green-light": "#02D5D9",
        "gradient-green-dark": "#003838",
      },
    },
  },
  plugins: [],
}
