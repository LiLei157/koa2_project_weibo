/*
 * @Author: your name
 * @Date: 2020-08-25 09:27:19
 * @LastEditTime: 2020-08-25 09:38:36
 * @LastEditors: Please set LastEditors
 * @Description: 数据库同步和测试
 * @FilePath: \koa2_project_weibo\src\db\sync.js
 */

const seq = require('./seq')

seq.authenticate().then(()=>{
    console.log('authen ok')
}).catch(()=>{
    console.log('authen error')
})

// 执行同步
seq.sync({force:true}).then(()=>{
    console.log('sync ok')
    process.exit()  // 手动关闭进程，防止资源浪费
})