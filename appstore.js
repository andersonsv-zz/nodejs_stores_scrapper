var store = require('app-store-scraper');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
const Logger = require('./logger');

var appleStoreId = 553834731;

store.app({id: appleStoreId, country: 'br'}).then((data) => {

    let logger = new Logger('App Store', data.title, data.score, data.appId, data.id);
    logger.log();

    const records = [];

    for(var i = 1; i < 10 ;i++){
        store.reviews({
            appId: data.appId,
            sort: store.sort.RECENT,
            page: i,
            country: 'br'
          })
          .then((dataReview) => {
            dataReview.forEach(function(review) {
                var reviewModel = [review.score, review.title, review.text];
                records.push(reviewModel);
            });

            const csvWriter = createCsvWriter({
                header: ['Nota', 'Título', 'Comentário'],
                path: 'appstore.csv'
            });

            csvWriter.writeRecords(records)
            .then(() => {
                console.log('...Done');
            }); 
        });
    }

  }).catch((error) => {
    console.debug('Failed');
  });
