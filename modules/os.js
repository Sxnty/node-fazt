const os = require('os')

/* console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.totalmem()) */

console.table({
    os: os.platform(),
    uptime: os.uptime(),
    TotalMemory: os.totalmem()
})