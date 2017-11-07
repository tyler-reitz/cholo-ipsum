const mongoose = require('mongoose')

const homieSchema = new mongoose.Schema({
  uri: String,
  homie: String,
  bioText: String
}, {
  collection: 'catalog'
})

const Homie = mongoose.model('Homie', homieSchema)

module.exports = Homie
