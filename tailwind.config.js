module.exports = {
  purge: ['./src/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        'theme-400': '#e10600'
      }
    },
  },
  variants: {},
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
}
