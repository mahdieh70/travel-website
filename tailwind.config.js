

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        small: "576px",
        medium: "767px",
        large: "993px",
        xLarge: "1100px",
      },
      colors: {
        "teal-color": "#22b3c1",
        gray: "#afafaf",
      },
      backgroundImage: {
        callToReserveImage: "url('https://i.postimg.cc/T37jySFh/cta-bg.jpg')",
      },
    },
    plugins: [],
  },
};
