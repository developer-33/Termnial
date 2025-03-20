/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */


const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust according to your project's structure
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Include all React components
//     "./public/index.html",        // Include the public folder
//   ],
//   theme: {
//     extend: {
//       animation: {
//         grow: 'grow 2s ease-in-out infinite',
//       },
//       keyframes: {
//         grow: {
//           '0%, 100%': { width: '10%' },
//           '50%': { width: '80%' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };