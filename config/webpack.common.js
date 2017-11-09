const commonPaths = require('./common-paths')

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
}
