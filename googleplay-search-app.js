var gplay = require('google-play-scraper');

gplay.search({
    term: "Mundo Bita",
    country: "br",
    lang : "pt",
    num: 3,
    collection: gplay.collection.TOP_FREE,
  }).then(console.log, console.log);