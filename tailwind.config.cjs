/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontSize: {
      "body-lg": ["1rem", "1.4375rem"],
      "body-md": ["0.9275rem", "1.375rem"],
      "body-sm": ["0.8125rem", "1.1875rem"],
      xl: ["1.5rem", "2.1875rem"],
      lg: ["1.25rem", "1.8125rem"],
      md: ["1.125rem", "1.625rem"],
      sm: ["0.875rem", "1.5rem"],
    },
    letterSpacing: {
      tightest: "-0.02rem",
      tighter: "-0.015rem",
      tight: "-0.01rem",
    },
    extend: {
      fontFamily: {
        sans: ["Jost", "sans-serif"],
      },
      colors: {
        mainPurple: "#AD1FEA",
        mainBlue: "#4661E6",
        lightBlue: "#62BCFA",
        mainOrange: "#F49F85",
        veryDarkBlue: "#373F68",
        darkBlue: "#3A4374",
        greyBlue: "#647196",
        lightGrey: "#F7F8FD",
        grey: "#F2F4FF",
      },
      backgroundImage: {
        "desktop-header":
          "url('/img/suggestions/desktop/background-header.png')",
        "tablet-header": "url('/img/suggestions/tablet/background-header.png')",
        "mobile-header": "url('/img/suggestions/mobile/background-header.png')",
      },
    },
  },
  plugins: [],
};
