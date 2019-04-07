var store = require('app-store-scraper')
const Logger = require('./logger')
const Csv = require('./csv')

var appleStoreId = 553834731

store.app({id: appleStoreId, country: 'br'}).then((data) => {

    let logger = new Logger('App Store', data.title, data.score, data.appId, data.id)
    logger.log()

    const records = []
    
    //limit 10 pages
    for(var i = 1; i <= 10 ;i++){
        store.reviews({
            appId: data.appId,
            sort: store.sort.RECENT,
            page: i,
            country: 'br'
          })
          .then((dataReview) => {
            dataReview.forEach(function(review) {
                var reviewModel = [review.score, review.title, review.text]
                records.push(reviewModel)
            })
            let csv = new Csv('csv/applestore.csv', records)
            csv.insertLines();
        
        })
    }

  }).catch((error) => {
    console.debug('Failed')
  })