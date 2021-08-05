const colors = require('tailwindcss/colors')
module.exports = {
  purge: ['./**/*.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
				teal: colors.teal,
			},
			backgroundImage: theme => ({
				'hero-pattern': "url('../images/px1.gif')",
			   }),
			   fontFamily: {
				'lato': ['"Lato"', 'sans-serif'],
				'ds-digital': ['ds-digitalnormal'],
			  },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
