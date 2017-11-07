const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Homie = require('./homie.js')

mongoose.connect('mongodb://localhost:27017/homies', {useMongoClient: true})
const db = mongoose.connection

//db.on('error', console.error.bind(console, 'connection error:'))
//db.once('open', () => {
//  console.log('Connected to DB!')
//
//  Homie.find((err,homie) => {
//    if (err) console.log(err)
//    console.log(homie)
//  })
//})

module.exports = db
