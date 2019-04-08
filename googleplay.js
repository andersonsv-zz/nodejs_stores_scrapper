var gplay = require('google-play-scraper')
const Logger = require('./logger')
const Csv = require('./csv')
const args = require('minimist')(process.argv.slice(2))

let googlePlayAppId = args['appId']

if(googlePlayAppId == undefined){
  console.log("É obrigatório realizar a chamada com o argumento --id (AppId-package Google Play). A chamada não foi completada")
  return;
}


gplay.app(
    {appId: googlePlayAppId , 
     lang : "pt", 
     country: "br"}
).then((data) => {

    new Logger('Google Play', data.title, data.scoreText, googlePlayAppId, data.appId).log()

    const records = []

    let reviewsCount = data.reviews
    let itemsPerPage = 40
    let pages = Math.floor(reviewsCount / itemsPerPage)

    for(var i = 1; i < pages ;i++){
        gplay.reviews({
            appId: googlePlayAppId,
            sort: gplay.sort.NEWEST,
            pages : i,
            lang: "pt-br"
        }).then((data) => {
            data.forEach(function(review) {
                var reviewModel = [review.score, review.title, review.text]
                records.push(reviewModel)
            })

            let csv = new Csv('csv/googleplay.csv', records)
            csv.insertLines();
        }).catch((error) => {
            console.debug('Failed - get review data')
        })
    } 
}).catch((error) => {
    console.debug('Failed - get app data')
})