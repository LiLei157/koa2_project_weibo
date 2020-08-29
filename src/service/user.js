/**
 * @description:service层，从数据库中查询数据
 */

 const {User} = require('../db/model/index')
 const {formatUser} = require('./_format')

/**
 * 获取用户信息
 * @param {*} userName 
 * @param {*} password 
 */
 async function getUserInfo(userName,password){
    // 创建查询条件,userName是必须要有的
    let whereOpt = {
        userName
    }
    // 如果有传password参数，就加入到查询条件中
    if(password){
        Object.assign(whereOpt,{password})
    }
    // 查询
    const result = await User.findOne({
        attributes:['id','userName','password','nickName','picture','city'],
        where:whereOpt
    })
    if(result == null){
        // 未找到
        return result
    }
    // 格式化
    const formatRes = formatUser(result.dataValues)
    return formatRes
 }
/**
 * 
 * @param {String} userName 用户名
 * @param {String} password 密码
 * @param {Number} gender 性别
 * @param {String} nickName 昵称,如果没有默认和用户名一样 
 */
 async function createUser({userName,password,gender=3,nickName}){
    const result = await User.create({
        userName,
        password,
        gender,
        nickName: nickName ? nickName : userName
    })
    const data = result.dataValues
    return data
 }
/**
 * 根据用户名删除用户信息
 * @param {*} userName 
 */
async function delUser(userName){
    const result = await User.destroy({
        where:{
            userName
        }
    })
    // 删除成功则result大于0，返回true
    return result > 0
}

 module.exports = {
     getUserInfo,
     createUser,
     delUser
 }