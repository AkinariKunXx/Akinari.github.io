const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      defaultFont: ['MorningBreeze'],
    },
    screens:{
      'mobile': '375px',
      // => @media (min-width: 375px) { ... }
      'tablet': '768px',
      // => @media (min-width: 768px) { ... }
      'desktop': '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {
      colors: {
        deepPurple: {
          200: "#b39ddb"
        },
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
});

