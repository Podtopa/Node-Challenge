const path = require('path')

console.log('files name:', path.basename(__filename))
console.log('dirname:', path.dirname(__filename))
console.log('file extension:', path.extname(__filename))
console.log('Parse:', path.parse(__filename).name)
console.log(path.join(__dirname, 'page', 'index.html'))
