/**
 * @description : 返回数据格式模型
 */

/**
 * @description : 基础数据格式，成功模型和失败模型分别继承自该模型
 */ 
class BaseModel{
    constructor({errno,message,data}){
        if(message){
            this.message = message
        }
        if(data){
            this.data = data
        }
        this.errno = errno
    }
}
/**
 * @description: 请求成功时返回的数据模型
 */
class SuccessModel extends BaseModel{
    constructor(data={}){
        super({
            errno:0,
            data
        })
    }
}
/**
 * @description:请求失败时返回的数据模型
 */
class ErrorModel extends BaseModel{
    constructor({errno,message}){
        super({
            errno,
            message
        })
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}