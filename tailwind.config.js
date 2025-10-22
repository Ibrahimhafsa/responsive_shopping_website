export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
        padding:"15px",
      },
      colors:{
        accent:"FF8F9C",
        blackish:"#1b1b1b",
      },
    },
  },
  plugins: [],
};