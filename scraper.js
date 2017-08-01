const request = require("request")
const cheerio = require("cheerio")
const mongojs = require('mongojs')

const dbURL = 'homies'
const collections = ['catalog']

const db = mongojs(dbURL, collections)

db.on('error', (err) => {
  console.log(`Database Error: ${err}`)
})

db.on('connect', () => {
  console.log('Connect to DB')
})

request("http://www.homies.tv/iframe_characterlist.htm", (err, res, html) => {
  if (err) console.log(err)

  const $ = cheerio.load(html)

  const homiesList = $(`table[width='411'] tbody tr td`).children();

  $(homiesList).each((i, el) => {
    if ($(el).is('a')) {
      
      if ($(el).text().match(/^[nopqrstuvwxyz]/i)) {
        console.log($(el).text(), '|', $(el).attr('href'))
        const homie = $(el).text()
        const uri = $(el).attr('href')
  
        request(`http://www.homies.tv/${uri}`, (err, res, html) => {
          if (err) console.log(err)
          const markup = cheerio.load(html)
          const bioText = markup(".homiebiotext div").text();
  
          db.catalog.insert({ uri, homie, bioText })
          console.log({ uri, homie, bioText })
        });
      }
    }
  })
})

