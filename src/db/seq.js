/*
 * @Author: your name
 * @Date: 2020-08-24 17:11:10
 * @LastEditTime: 2020-08-25 09:26:06
 * @LastEditors: Please set LastEditors
 * @Description: 实例化sequelize
 * @FilePath: \koa2_project_weibo\src\db\seq.js
 */
const Sequelize = require('sequelize')
const {MYSQL_CONF} = require('../conf/db')

let conf = {
    host:MYSQL_CONF.host,
    dialect:'mysql'
}
const seq = new Sequelize(MYSQL_CONF.database,MYSQL_CONF.username,MYSQL_CONF.password,conf) 

module.exports = seq