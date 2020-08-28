/**
 * @description 登录验证中间件
 * @author li lei
 * 
 */
const {ErrorModel} = require('../model/ResModel')
const {loginCheckFailInfo} = require('../model/ErrorInfo')
/**
 * 验证是否登录，主要针对api，当未登录时返回未登录错误信息
 * @param {Object} ctx 
 * @param {Function} next 
 */ 
async function loginCheck(ctx,next){
    if(ctx.session && ctx.session.userInfo){
        await next()
        return
    }
    ctx.body = new ErrorModel(loginCheckFailInfo)
}
/**
 * 验证是否登录，针对view页面，如果未登录则跳转到登录页面
 * @param {Object} ctx 
 * @param {Function} next 
 */
async function loginRedirect(ctx,next){
    if(ctx.session && ctx.session.userInfo){
        await next()
        return 
    }
    // 未登录,页面跳转到登录页
    const curUrl = ctx.url  // 把要跳转的页面作为参数拼接到login路径后
    ctx.redirect('/login?url=' + encodeURIComponent(curUrl))    // 重定向到login页面
}
module.exports = {
    loginCheck,
    loginRedirect
}