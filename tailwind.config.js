/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'reg': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}