const express = require('express')
const logger = require('morgan')
const db = require('./db/db.js')
const homie = require('./db/homie.js')

const PORT = 3000
const app = express()

app.use(logger('dev'))

app.get('*', (req,res) => {
  homie.find((err,docs) => {
    res.json(docs)
  })
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
