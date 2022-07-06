const os = require('os')

console.log('Operating System', os.platform())
console.log('processor architecture', os.arch())
console.log('information on processors', os.cpus())
console.log('free memory', os.freemem())
console.log('of all memory', os.totalmem())
console.log('home directory', os.homedir())
console.log('enabled', os.uptime())