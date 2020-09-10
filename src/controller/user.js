/**
 * @description:处理查询用户是否存在，只是业务逻辑
 *
 */
const {getUserInfo,createUser,delUser,updateUser} = require('../service/user')
const {SuccessModel,ErrorModel} = require('../model/ResModel')
const {registerUserNameExistInfo,registerFailInfo,loginFailInfo,deleteUserFailInfo,changeInfoFailInfo} = require('../model/ErrorInfo')
const doCrypto = require('../utils/crpy')
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
            password:doCrypto(password),
            gender
        })
        return new SuccessModel()
    }catch(err){
        console.error(err.message,err.stack)
        return new ErrorModel(registerFailInfo)
    }
}
/**
 * 
 * @param {String} userName 用户名
 * @param {String} password 密码 
 */
async function login(ctx,userName,password){
    // 1、逻辑处理
    // 2、调用service里的方法去验证登录
    const userInfo = await getUserInfo(userName,doCrypto(password))
    if(!userInfo){
        return new ErrorModel(loginFailInfo)
    }
    if(ctx.session.userInfo == null){
        ctx.session.userInfo = userInfo
    }
    return new SuccessModel()
}
/**
 * 根据用户名删除用户信息
 * @param {String} userName 
 * @param 
 */
async function deleteUser(userName){
    // 没有逻辑，直接调用service中的方法删除用户
    const result = await delUser(userName)
    if(result){
        // 大于0，true，删除成功
        return new SuccessModel()
    }else{
        return new ErrorModel(deleteUserFailInfo)
    }
}
/**
 * 更新用户信息
 * @param {*} ctx 
 * @param {*} param1 
 */
async function changeInfo(ctx,{nickName,city,picture}){
    let {userName} = ctx.session.userInfo
    // 判断当前用户是否有输入nickName
    if(!nickName){
        nickName = userNmae
    }
    // 调用service层方法操作数据库
    const res = await updateUser({
        newNickName:nickName,
        newCity:city,
        newPicture:picture
    },
    {userName}
    )
    if(res){
        // 往Session中追加nickName,city
        Object.assign(ctx.session.userInfo,{
            nickName,
            city,
            picture
        })
        // res为true，代表更新成功
        return new SuccessModel()
    }
    return new ErrorModel(changeInfoFailInfo)
}

module.exports = {
    isExist,
    register,
    login,
    deleteUser,
    changeInfo
}