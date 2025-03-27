/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        b1 : '#08090D',
        b2 : '#1A1E26',
        b3 : '#343A40',
        t1 : '#6E7371',
        t2 : '#A1A69C'
      }
    },
  },
  plugins: [],
}

