const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber({
    typescript: require.resolve('typescript'),
    // Other configurations...
  }))
}