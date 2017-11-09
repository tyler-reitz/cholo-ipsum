const commonPaths = require('./.build-utils/common-paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

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