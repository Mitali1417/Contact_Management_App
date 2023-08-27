/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      xs: "300px",
      ss: "600px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
  },
  },
  plugins: [],
}