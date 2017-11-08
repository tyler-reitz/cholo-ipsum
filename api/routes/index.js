const db = require('../db/db.js')
const homie = require('../db/homie.js')
const getCorpus = require('../lib-utils/natural')

exports.find = function(req,res) {
  homie.find((err,docs) => res.json(docs))
}

exports.tfidf = function (req, res) {
  homie.find({}, 'bioText', (err, docs) => {
    const corpus = getCorpus(docs)
    console.log(corpus)
    res.json(corpus)
  })
}
