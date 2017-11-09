const path = require('path')

module.exports = {
  root: path.join(__dirname, '..'),
  entry: path.join(__dirname, '..', 'client'),
  ouput: path.join(__dirname, '..', 'dist'),
  common: path.join(__dirname, '..', 'common')
}
