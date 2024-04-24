/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
        'raleway': ['raleway', 'sans-serif']
      },
      aspectRatio: {
        'wide': '18 / 5',
        '4/3': '4 / 3',
      }
    },
  },
  plugins: [
    require("tailwindcss-scoped-groups"),
  ],
}