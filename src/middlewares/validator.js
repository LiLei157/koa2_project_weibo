const {ErrorModel} = require('../model/ResModel')
const {jsonSchemaFileInfo} = require('../model/ErrorInfo')

function genValidator(validatorFn){
    async function validator(ctx,next){
        let data = ctx.request.body
        const error = validatorFn(data)
        // 如果有错误，以固定格式返回
        if(error){
            ctx.body = new ErrorModel(jsonSchemaFileInfo)
            return
        }
        await next()
    }
    return validator
}
module.exports = genValidator