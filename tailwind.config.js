/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}',
  './dist/index.html',
],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primary: '#84C318',
        secondary: '#503D42',
        neutralbcg: '#F5FBEF'
      },
      
    },
    fontFamily: {
      'philosopher': ['Philosopher', 'sans-serif']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

