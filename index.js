var store = require('app-store-scraper');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;

console.log("Recover info for AppStore");

var appleStoreId = 553834731;

store.app({id: appleStoreId, country: 'br'}).then((data) => {
    console.log(`##################### App Info #####################`);
    console.log(`-> Title: ${data.title}`);
    console.log(`-> Score: ${data.score}`);
    console.log(`-> AppId: ${data.appId}`);
    console.log(`-> Id: ${data.id}`);
    console.log("####################################################");

    console.log(`##################### Reviews #####################`);
    
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
                path: 'file.csv'
            });

            csvWriter.writeRecords(records)       // returns a promise
            .then(() => {
                console.log('...Done');
            }); 
        });
    }

    console.log("####################################################");

  }).catch((error) => {
    console.debug('Failed');
  });
