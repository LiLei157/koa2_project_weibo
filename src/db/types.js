/*
 * @Author: your name
 * @Date: 2020-08-25 08:49:44
 * @LastEditTime: 2020-08-25 09:09:31
 * @LastEditors: Please set LastEditors
 * @Description: 抽离出的Sequelize数据类型，方便与引用
 * @FilePath: \koa2_project_weibo\src\db\types.js
 */
const Sequelize = require('sequelize')

module.exports = {
    STRING:Sequelize.STRING,
    INTEGER:Sequelize.INTEGER,
    DECIMAL:Sequelize.DECIMAL,
    BOOLEAN:Sequelize.BOOLEAN,
    TEXT:Sequelize.TEXT
}