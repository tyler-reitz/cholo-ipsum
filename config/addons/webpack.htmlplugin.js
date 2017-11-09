const commonPaths = require('../common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.entry}/index.html`
    })
  ]
}
