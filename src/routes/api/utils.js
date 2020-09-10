/**
 * @description 图片上传
 * @author li lei 
 */
const router = require('koa-router')()

const {loginCheck} = require('../../middlewares/loginCheck')
const koaForm = require('formidable-upload-koa')    // 上传图片插件
const {saveFile} = require('../../controller/utils')
// router.prefix()设置router前缀
router.prefix('/api/utils')

/**
 * 上传图片
 * @api {POST} /api/utils/upload 上传图片
 * @apiGroup Utils
 * @apiParam {Object} file
 * @apiSuccessExample {json} Response-Example
 * {
 *      errno:0,
 *      data:{
 *          url: "/1598691416196.touxiang.jpg"
 *      }
 * }
 * @apiErrorExample {json} Response-Example
 * {
 *      errno:10007,
 *      message:"上传文件尺寸过大"
 * }
 */
router.post('/upload',loginCheck,koaForm(),async (ctx,next)=>{
    const file = ctx.req.files['file']  // 获取上传图片
    if(!file){
        return
    }
    const {
        size,
        name,
        type,
        path} = file
    // 调用逻辑层处理
    ctx.body = await saveFile({
        name,
        size,
        type,
        filePath:path
    })
})
module.exports = router