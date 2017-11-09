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
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1  }},
          'postcss-loader'
        ]
      }
    ]
  },
}
