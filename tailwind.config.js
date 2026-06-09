/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#191919',
        biscuit: '#E4DCCF',
        orange: '#F75708',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
