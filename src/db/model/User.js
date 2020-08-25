/*
 * @Author: your name
 * @Date: 2020-08-25 09:39:25
 * @LastEditTime: 2020-08-25 09:52:24
 * @LastEditors: Please set LastEditors
 * @Description: Sequelize创建Users表数据模型
 * @FilePath: \koa2_project_weibo\src\db\model\User.js
 */
const seq = require('../seq')
const {DECIMAL,STRING} = require('../types')

const User = seq.define('user',{
    userName:{
        type:STRING,
        allowNull:false,
        unique:true,    // 昵称唯一性
        comment:'昵称唯一性'
    },
    password:{
        type:STRING,
        allowNull:false,
        comment:'密码'
    },
    nickName:{
        type:STRING,
        allowNull:false,
        comment:'昵称'
    },
    gender:{
        type:DECIMAL,  
        allowNull:false,
        defaultValue:3,
        comment:'性别(1:男  2:女  3:保密)'
    },
    picture:{
        type:STRING,
        comment:'存储的是头像的url地址'
    },
    city:{
        type:STRING,
        comment:'城市'
    }
})

module.exports = User