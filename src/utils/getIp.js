const os = require('os')

// console.log(os.networkInterfaces())
const ipInfo = os.networkInterfaces()
// let list = ipInfo.WLAN.filter(item => item.family === 'IPv4').map(item => item.family.address)
let list = ipInfo.WLAN.filter(item => item.family === 'IPv4').map(item => item.address)

module.exports = {
    ip:list[0]
}