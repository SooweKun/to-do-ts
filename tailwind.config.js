/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "jura": ['Jura', 'sans-serif'],
        'nova-cut': ['Nova Cut', 'cursive'],
      }
    },
  },
  plugins: [],
}