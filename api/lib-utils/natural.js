const natural = require('natural')
const TfIdf = natural.TfIdf
const tfidf = new TfIdf()

function getCorpus(docs) {
  const corpus = 
    docs.reduce((acc, curr) => `${acc} ${curr.bioText}`, ' ')
  tfidf.addDocument(corpus)
  return tfidf.listTerms(0)
}

module.exports = getCorpus
