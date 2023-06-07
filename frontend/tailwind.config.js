/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        archivoNarrow: ["Archivo Narrow", "sans-serif"],
        balooChettan: ["Baloo Chettan 2", "cursive"],
      },
      colors: {
        light: {
          background: "#FFFFFF",
          primary: "#2B8CE5",
          secondary: "#565656",
          inputFill: "#E7E7E7"
        },
        dark: {
          background: "#3A3A3A",
          primary: "#2B8CE5",
          secondary: "#DADADA",
          inputFill: "#FFFFFF"
        },
        input: {
          stroke: "#3A3A3A",
          icon: "#7E7E7E",
          text: "#9E9E9E",
        },
        success: "#00C851",
        info: "#2B8CE5",
        warn: "#FFBB33",
        error: "#FE4E4E"
      },
    },
  },
  plugins: [],
};
