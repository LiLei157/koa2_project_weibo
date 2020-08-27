/**
 * @description:定义数据验证的方法
 */
const Ajv = require('ajv')

const ajv = new Ajv(
    //{allErrors:true}    // 验证全部数据规则
)   

/**
 * json schema 数据验证
 * @param {*} schema 验证规则
 * @param {*} data 待验证的数据
 */
function validator(schema,data={}){
    const valid = ajv.validate(schema,data)
    if(!valid){ // 如果验证没有错误
        return ajv.errors[0] // 返回第一条
    }
}

module.exports = validator