/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    colors: {
      transparent: "transparent",
      white: "white",
      "desatured-red": "hsl(0, 36%, 70%)",
      "soft-red": "hsl(0, 93%, 68%)",
      "d-grayish-red": "hsl(0, 6%, 24%)",
      gr1: "hsl(0, 0%, 100%)",
      gr2: "hsl(0, 100%, 98%)",
      gr3: "hsl(0, 80%, 86%)",
      gr4: "hsl(0, 74%, 74%)",
    },
    screens: {
      sm: "540px",
      md: "840px",
      lg: "1440px",
    },
    extend: {
      fontFamily: {
        body: "Josefin Sans, sans-serif",
      },
    },
  },
  plugins: [],
};
