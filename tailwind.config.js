/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customRed500: "#ff3333",
        customRed600: "#ee1414",
        customRed700: "#c80d0d",
        customRed800: "#c80d0d",
        customGray: "#d4cdcd",
        customBgGray:"#516069",
        customGray:"#516069",
        customCyan:"#16f5f5ff",
        customRed:"#e60000ff"
      }

    },
  },
  plugins: [],
}