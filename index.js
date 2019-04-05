var store = require('app-store-scraper');

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
    

    for(var i = 1; i < 10 ;i++){
        store.reviews({
            appId: data.appId,
            sort: store.sort.RECENT,
            page: i,
            country: 'br'
          })
          .then((dataReview) => {
            
            console.log("Data length " + dataReview.length);
            
            dataReview.forEach(function(review) {
                console.log("----------------------------------------------------");
                console.log(review.score);
                console.log(review.title);
                console.log(review.text);
              });
    
          });
    }
    console.log("####################################################");

  }).catch((error) => {
    console.debug('Failed');
  });
