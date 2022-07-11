/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif']
      }, //end of fontFamily
    },
  },
  plugins: [],
}
