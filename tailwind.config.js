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
      animation: {
        wiggle: 'wiggle 2s ease-in-out',
      }, 
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': {transform: 'translateY(250px)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

