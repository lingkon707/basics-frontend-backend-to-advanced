/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
       colors: {
        rgbdark: '#0a0a23',
        rgbblue: '#101f4f',
        rgbmid: '#3a4a9f',
        pink: {
          500: '#ff0080',
        }
      }
    },
  },
  plugins: [],
}
