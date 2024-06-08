/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#54CCCC',
          dark: '#335C6E',
          light: '#FABD33',
          contrastText: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#CFFAFA',
          dark: '#53C2C2', //option two #2BB8B8
          light: '#FAAD00',
        },
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('tailwind-scrollbar')],
}
