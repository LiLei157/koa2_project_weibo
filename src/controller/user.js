/**
 * @description:处理查询用户是否存在，只是业务逻辑
 *
 */
const {getUserInfo} = require('../service/user')
const {SuccessModel,ErrorModel} = require('../model/ResModel')
/**
 * 查询用户名是否已存在的业务逻辑
 * @param {*} userName 
 */
async function isExist(userName){
    // 业务逻辑处理(无)
    // 调用service获取数据
    // return 返回固定的格式
    let result = await getUserInfo(userName)
    // 如果result有值，证明成功
    if(result){
        return new SuccessModel(result)
    }else{
        return new ErrorModel({
            error:10003,
            message:'用户名未存在'
        })
    }
}

module.exports = {
    isExist
}