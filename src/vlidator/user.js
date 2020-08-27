/**
 * @description 用户信息数据格式验证规则
 */
const validator = require('./_validator')
const SCHEMA = {
    type:'object',
    properties:{
        userName:{
            type:'string',
            pattern:'^[a-zA-Z][a-zA-Z0-9_]+$',
            maxLength:255,
            minLength:3
        },
        password: {
            type: 'string',
            maxLength: 255,
            minLength: 3
        },
        newPassword: {
            type: 'string',
            maxLength: 255,
            minLength: 3
        },
        nickName: {
            type: 'string',
            maxLength: 255
        },
        picture: {
            type: 'string',
            maxLength: 255
        },
        city: {
            type: 'string',
            maxLength: 255,
            minLength: 2
        },
        gender: {
            type: 'number',
            minimum: 1,
            maximum: 3
        }
    }
}

/**
 * @description 验证用户相关功能的信息
 * @param {Object} data 要验证的数据 
 */
function userValidator(data={}){
    return validator(SCHEMA,data)
}
module.exports = userValidator