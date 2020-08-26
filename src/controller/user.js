/**
 * @description:处理查询用户是否存在，只是业务逻辑
 *
 */
const {getUserInfo,createUser} = require('../service/user')
const {SuccessModel,ErrorModel} = require('../model/ResModel')
const {registerUserNameExistInfo,registerFailInfo} = require('../model/ErrorInfo')
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
            errno:10003,
            message:'用户名未存在'
        })
    }
}

/**
 * 注册用户业务逻辑
 * @param {String} userName 用户名
 * @param {String} password 密码
 * @param {Number} gender 性别(1 男; 2 女;3 保密) 
 */
async function register({userName,password,gender}){
    // 业务逻辑,判断用户名是否已存在
    let userInfo = await getUserInfo(userName)
    if(userInfo){
        // 如果用户名已存在，返回错误信息用户已存在
        return new ErrorModel(registerUserNameExistInfo)
    }
    // 调用service中的方法，用于注册账号
    try{
        await createUser({
            userName,
            password,
            gender
        })
        return new SuccessModel()
    }catch(err){
        console.error(err.message,err.stack)
        return new ErrorModel(registerFailInfo)
    }
}

module.exports = {
    isExist,
    register
}