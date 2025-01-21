/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        'hl-blue': '#c2e2ff',
        'bg-gray': '#e8effc',
        'dark-blue': '#284b74',
      },
    },
  },
  plugins: [],
}

