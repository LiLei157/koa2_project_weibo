/**
 * @description: 密码加密
 */
const crypto = require('crypto')
const {CRYPTO_SECRET_KEY} = require('../conf/secretKeys')

/**
 * md5算法,带下划线说明是私密方法，不暴露给外部使用的
 * @param {String} content 要加密的内容 
 */
function _md5(content){
    const md5 = crypto.createHash('md5')    // 创建并返回md5对象
    return md5.update(content).digest('hex')
}

/**
 * @param {String} content 明文
 */
function doCrypto(content){
    const str = `password=${content}&key=${CRYPTO_SECRET_KEY}`
    return _md5(content)
}
module.exports = doCrypto