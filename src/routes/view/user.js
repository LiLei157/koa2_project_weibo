/*
 * @Author: your name
 * @Date: 2020-08-24 16:39:30
 * @LastEditTime: 2020-08-24 16:44:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2_project_weibo\src\routes\user.js
 */
const koa = require('koa')
const router = require('koa-router')()

// 路由登录
router.get('/login',async (ctx,next)=>{
    await ctx.render('login',{})
})
// 注册
router.get('/register',async (ctx,next)=>{
    await ctx.render('register',{})
})

module.exports = router