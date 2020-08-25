
/**
 * @description : 数据格式化
 * @author: lilei
 */
const {DEFAULT_PICTURE} = require('../conf/constant')
 /**
  * 格式化用户头像
  * @param {Object} obj 
  */
 function _formatUserPicture(obj){
    if(obj.picture == null){
        obj.picture = DEFAULT_PICTURE
    }
    return obj
 }

 /**
  * 格式化用户信息
  * @param {Array|Object} list用户列表或者是用户对象
  */
 function formatUser(list){
    if(list == null){
        return list
    }
    if(list instanceof Array){
        return list.map(_formatUserPicture)
    }
    // 如果是对象类型
    return _formatUserPicture(list)
 }

 module.exports = {
     formatUser
 }