/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        skyBlue: "#2F9FF8",
        amberBlack: "#072D4B",
        bgBtn: "#0768B5",
        mainBg:'#f4f9f8'
      },
      borderRadius: {
        btnRounded: "6px",
      },

    },
  },
  plugins: [],
};
