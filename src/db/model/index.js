/*
 * @Author: your name
 * @Date: 2020-08-25 10:22:47
 * @LastEditTime: 2020-08-25 10:23:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \koa2_project_weibo\src\db\model\index.js
 */
const User = require('./User')
const Blog = require('./Blog')

// 指定外键关联: Blog表中的userId是User表中的id的外键
Blog.belongsTo(User,{
    foreignKey:'userId'
})
module.exports = {
    User,
    Blog
}