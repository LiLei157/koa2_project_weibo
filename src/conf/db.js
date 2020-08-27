/*
 * @Author: your name
 * @Date: 2020-08-24 17:26:13
 * @LastEditTime: 2020-08-25 08:49:23
 * @LastEditors: Please set LastEditors
 * @Description: mysql和redis存储配置
 * @FilePath: \koa2_project_weibo\src\conf\db.js
 */
const {isDev,isProd} = require('../utils/env')
// 默认是开发环境配置
let MYSQL_CONF = {
    host:'localhost',
    port:3306,
    username:'root',
    password:'root123',
    database:'koa2_weibo_db'
}
let REDIS_CONF = {
    port:6379,
    host:"127.0.0.1"
}
// 生产环境
if(isProd){
    MYSQL_CONF = {
        
    }
    REDIS_CONF={

    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}

