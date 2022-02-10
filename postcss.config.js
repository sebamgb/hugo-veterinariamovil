const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // the following runs when env is NOT development (production)
    !process.env.HUGO_ENVIRONMENT === 'development'
    ? autoprefixer()
    : null,
  ]
}
