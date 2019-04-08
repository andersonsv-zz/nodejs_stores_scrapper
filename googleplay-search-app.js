var gplay = require('google-play-scraper');
const args = require('minimist')(process.argv.slice(2))

let term = args['term']
let results = args['results'] != null ? args['results'] : 10;

if(term == undefined){
  console.log("É obrigatório realizar a chamada com o argumento --term. A chamada não foi completada")
  return;
}

gplay.search({
    term: term,
    country: "br",
    lang : "pt",
    num: results,
    collection: gplay.collection.TOP_FREE,
  }).then((data) => {
    data.forEach(function(apps) {
        console.log('========================================================')
        console.log(`#Title->     ${apps.title}`)
        console.log(`#AppId->     ${apps.appId}`)
        console.log(`#Developer-> ${apps.developer}`)
        console.log(`#Score->     ${apps.score}`)
    })
})