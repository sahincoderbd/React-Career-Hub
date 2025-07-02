/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#5c6ac4',
          secondary: '#ecc94b',
          gradient1: '#7E90FE',
          gradient2: '#9873FF',

        },
      },
    },
  };