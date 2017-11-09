const commonPaths = require('./common-paths')

module.exports = {
  devServer: {
    contentBase: commonPaths.dist,
  },
  devtool: 'source-map',
}
