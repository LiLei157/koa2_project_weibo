/**
 * @description: user api 路由
 */
const router = require('koa-router')()
const {isExist,register} = require('../../controller/user')

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
router.post('/register',async (ctx,next)=>{
    const {userName,password,gender} = ctx.request.body
    // 调用controller中的方法
    ctx.body = await register({userName,password,gender})
})

router.post('/login',async (ctx,next)=>{
    const {userName,password} = ctx.request.body
    // 调用controller中的方法
    
})

// 导出当前的User api router
module.exports = router