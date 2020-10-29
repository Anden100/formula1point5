module.exports = {
  purge: ['./src/**/*.jsx', './src/**/*.tsx'],
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
