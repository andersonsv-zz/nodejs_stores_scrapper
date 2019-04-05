var store = require('app-store-scraper');

console.log("Recover info for AppStore");
store.app({id: 553834731, country: 'br'}).then((data) => {
    var id = data.id;
    var appId = data.appId;
    console.log(`##################### App Info #####################`);
    console.log(`-> Title: ${data.title}`);
    console.log(`-> Score: ${data.score}`);
    console.log(`-> AppId: ${appId}`);
    console.log(`-> Id: ${id}`);
    console.log("####################################################");
  }).catch((error) => {
    console.debug('Failed');
  });