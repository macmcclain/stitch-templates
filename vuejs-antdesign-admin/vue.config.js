const Dotenv = require('dotenv-webpack');

module.exports = {
  chainWebpack: config => {
    config.externals({
    })
  },
  configureWebpack: {
    plugins: [
      new Dotenv()
    ]
  }
}
