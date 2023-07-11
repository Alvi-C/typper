/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        Lato: "'Lato', sans-serif",
      }
    },
  },
  plugins: [],
}

