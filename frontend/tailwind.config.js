/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivoNarrow: ["Archivo Narrow"],
        balooChettan: ["Baloo Chettan"],
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
        inputStroke: "#3A3A3A",
        inputIcon: "#7E7E7E",
        inputText: "#9E9E9E",
        success: "#00C851",
        info: "#2B8CE5",
        warn: "#FFBB33",
        error: "#FE4E4E"
      },
    },
  },
  plugins: [],
};
