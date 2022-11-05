/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'pokemon-primaryBlue': '#0A285F',
        'pokemon-secondaryBlue': '#0075BE',
        'pokemon-primaryYellow': '#D5A100',
        'pokemon-secondaryYellow': '#FFCC00',
      }
    },
  },
  plugins: [],
}
