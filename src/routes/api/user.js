/**
 * @description: user api 路由
 */
const router = require('koa-router')()
const {isExist} = require('../../controller/user')

router.prefix('/api/user')  // 设置基础路由

/**
 * @api(GET) /api/user/isExist
 * @apiGroup User
 * @apiParam {String} userName 用户名
 * @apiSuccessExample {json} Response-Example
 * {
 *    "state":0,
 *    "createTime": "1568901681"
 * }
 */
router.post('/isExist',async (ctx,next)=>{
    const {userName} = ctx.request.body
    ctx.body = await isExist(userName)
})


// 导出当前的User api router
module.exports = router