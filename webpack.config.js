const commonPaths = require('./config/common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: commonPaths.entry,
  output: {
    path: commonPaths.output,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  devServer: {
    contentBase: commonPaths.dist,
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.entry}/index.html`
    })
  ]
}
