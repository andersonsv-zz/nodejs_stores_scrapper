
class Logger { 
  constructor(store, appName, totalScore, packageApp, id) {
      this.store = store
      this.appName = appName
      this.totalScore = totalScore
      this.packageApp = packageApp
      this.id = id
  }

  log() {
      console.log(`######## Recover info for ${this.store} ########`)
      console.log(`-> App Name: ${this.appName}`)
      console.log(`-> Score: ${this.totalScore}`)

      if(this.packageApp != ''){
          console.log(`-> AppId: ${this.packageApp}`)
      }
      console.log(`-> Id: ${this.id}`)
  }
}
module.exports = Logger;