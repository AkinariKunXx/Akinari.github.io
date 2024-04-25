const withMT = require("@material-tailwind/react/utils/withMT");
/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
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
    },
  
  },
  plugins: [],
});

