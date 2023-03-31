/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        small: "576px",
        medium: "767px",
        large: "993px",
      },
      colors: {
        "teal-color": "#22b3c1",
        gray: "#afafaf",
      },
      backgroundImage: {
        iranBanner: "url('https://postimg.cc/F7TFBT2N')",
      },
    },
  },
  plugins: [],
};
