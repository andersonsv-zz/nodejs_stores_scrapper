var store = require('app-store-scraper')
const Logger = require('./logger')
const Csv = require('./csv')
const args = require('minimist')(process.argv.slice(2))

let appleStoreId = args['id']

if(appleStoreId == undefined){
  console.log("É obrigatório realizar a chamada com o argumento --id (Id App Store). A chamada não foi completada")
  return;
}

store.app({
    id: appleStoreId, 
    country: 'br'
}).then((data) => {

    new Logger('App Store', data.title, data.score, data.appId, data.id).log()
    const records = []
    
    //limit 10 pages
    for(var i = 1; i <= 10 ;i++){
        store.reviews({
            appId: data.appId,
            sort: store.sort.RECENT,
            page: i,
            country: 'br'
          }).then((dataReview) => {
            dataReview.forEach(function(review) {
                var reviewModel = [review.score, review.title, review.text]
                records.push(reviewModel)
            })
            let csv = new Csv('csv/applestore.csv', records)
            csv.insertLines();
        
        }).catch((error) => {
            console.debug('Failed - get review data')
        })
    }

  }).catch((error) => {
    console.debug('Failed - get app data')
})