const createCsvWriter = require('csv-writer').createArrayCsvWriter

class Csv{
    constructor(filePath, records) {
        this.filePath = filePath
        this.records = records
    }

    insertLines(){
        const csvWriter = createCsvWriter({
            header: ['Nota', 'Título', 'Comentário'],
            path: this.filePath
        })
    
        csvWriter.writeRecords(this.records)
        .then(() => {
            console.log('...Done')
        })
    }
}
module.exports = Csv;