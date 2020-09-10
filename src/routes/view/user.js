/*
 * @Author: your name
 * @Date: 2020-08-24 16:39:30
 * @LastEditTime: 2020-08-25 14:01:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2_project_weibo\src\routes\user.js
 */
const koa = require('koa')
const router = require('koa-router')()
// const {ip} = require('../../utils/getIp')

const {loginRedirect} = require('../../middlewares/loginCheck') // 页面验证
/**
 * 获取用户信息
 * @param {*} ctx 
 */
function getUserInfo(ctx){
    let data = {
        isLogin:false
    }
    if(ctx.session && ctx.session.userInfo){
        let userInfo = ctx.session.userInfo
        data = {
            isLogin:true,
            userName:userInfo.userName
        }
    }
    return data
}

// 路由登录
router.get('/login',async (ctx,next)=>{
    await ctx.render('login',getUserInfo(ctx))
})
// 注册
router.get('/register',async (ctx,next)=>{
    await ctx.render('register',getUserInfo(ctx))
})

// 用户设置
router.get('/setting',loginRedirect,async(ctx,next)=>{
    // 登录成功后会把用户信息储存在session中，通过ctx.session.userInfo取出
    await ctx.render('setting',ctx.session.userInfo)
})
// router.get('/getIp',async(ctx,next)=>{
//     // 登录成功后会把用户信息储存在session中，通过ctx.session.userInfo取出
//     ctx.body = `本机ip：${ip}`
// })


module.exports = router