/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/preline/preline.js',
  ],
   theme: {
    extend: {
      container:{
        screens:{
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1140px",

        },
        center: true
      },
      colors: {
        primary: "#1E40AF",
        primaryContent: "#eff3ff",
        secondary: "#FF7621",
        back: "#f6f6f6"
      },
      fontFamily: {
        barlow: "Barlow",
        sans: "sans-serif"

      }},
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('preline/plugin','@tailwindcss/typography'),
    
  ],
}