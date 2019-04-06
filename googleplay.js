var gplay = require('google-play-scraper');

gplay.reviews({
  appId: 'com.king.candycrushsaga',
  page: 0,
  sort: gplay.sort.NEWEST,
  lang: "pt-br"
}).then(console.log, console.log);



