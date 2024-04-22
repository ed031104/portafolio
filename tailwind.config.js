// tailwind.config.js
const { nextui } = require('@nextui-org/theme');


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    "./src/index.html",
    './src/**/*.{html,js,ts,jsx,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui(),
]
}