const commonPaths = require('./common-paths')

module.exports = {
  devServer: {
    contentBase: commonPaths.dist,
    proxy: {
      '/api': 'http://localhost:3000'
    }
  },
  devtool: 'source-map',
}
