/**
 * @description: user api 路由
 */
const router = require('koa-router')()
const {isExist,register, login,deleteUser} = require('../../controller/user')
const userValidator = require('../../vlidator/user')    // 导入用户信息验证函数作为参数传递给数据验证中间件
const genValidator = require('../../middlewares/validator') //导入定义的数据验证中间件
const {isTest} = require('../../utils/env')
const {loginCheck} = require('../../middlewares/loginCheck')

router.prefix('/api/user')  // 设置基础路由

/**
 * @api {post} /api/user/isExist 判断用户是否存在
 * @apiGroup User
 * @apiParam {String} userName 用户名
 * @apiSuccessExample {json} Response-Example
 * {
 *    errno:0,
 *    data:{
 *        
 *    }
 * }
 * @apiErrorExample {json} Response-Example
 * {
 *    errno:10003,
 *    message:'用户名已存在'
 * }
 */
router.post('/isExist',async (ctx,next)=>{
    const {userName} = ctx.request.body
    ctx.body = await isExist(userName)
})

/**
 * @api {post} /api/user/register 用户注册
 * @apiGroup User
 * @apiParam {String} userName 用户名
 * @apiParam {String} password 密码
 * @apiParam {Number} gender (1:男;2:女;3:保密)
 * @apiSuccessExample {json} Response-Example:
 * {
 *     errno:0,
 *     data:{}
 * }
 * @apiErrorExample {json} Response-Example:
 * {
 *     errno:10002,
 *     message:"注册失败"
 * }     
 * 
 */
router.post('/register',genValidator(userValidator),async (ctx,next)=>{
    const {userName,password,gender} = ctx.request.body
    // 调用controller中的方法
    ctx.body = await register({userName,password,gender})
})
/**
 * @api {POST} /api/user/login 用户登录
 * @apiGroup User
 * @apiParam {String} userName 用户名
 * @apiParam {String} password 密码
 * @apiSuccessExample {json} Response-Example:
 * {
 *      errno:0,
 *      data:{}
 * }
 * @apiErrorExample {json} Response-Example:
 * {
 *      errno:10004,
 *      message:"登录失败，用户名或密码错误"
 * }
 */
router.post('/login',async (ctx,next)=>{
    const {userName,password} = ctx.request.body
    // 调用controller中的方法
    ctx.body = await login(ctx,userName,password)
})

/**
 * 1、删除用户数据，只在单元测试时可用，用于删除测试数据
 * 2、删除信息必须先验证是否登录，登录成功才让删除
 * 3、只能删除当前登录的用户信息
 */
router.post('/delete',loginCheck,async (ctx,next) =>{
    // 用户登录成功后会向session中写入用户信息，所以直接从session中获取
    const {userName} = ctx.session.userInfo
    // 只有test环境下 调用controller逻辑
    if(isTest){
        ctx.body = await deleteUser(userName)
    }
})

// 导出当前的User api router
module.exports = router