/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors: {
        'rh-dark-blue': '#11224D',
        'rh-blue-1': '#193A6F',
        'rh-blue-2': '#2C599D',
        'rh-blue-3': '#5B84C4',
        'rh-orange-1': '#F98125',
        'rh-orange-2': '#F89B50',
      },
    },
  },
  plugins: [],
};