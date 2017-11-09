const webpackMerge = require('webpack-merge')
const commonConfig = require('./config/webpack.common')
const devConfig = require('./config/webpack.dev')
const plugins = require('./config/addons/webpack.htmlplugin')

module.exports = webpackMerge(commonConfig, devConfig, plugins)
