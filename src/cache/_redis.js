/**
 * @description redis 客户端创建及get，set方法创建
 * @author lilei
 */
const {REDIS_CONF} = require('../conf/db')
const redis = require('redis')

const rdclient = redis.createClient(REDIS_CONF.host,REDIS_CONF.port)
// 监听错误
rdclient.on('error',(error)=>{
    console.error(error)
})

/**
 * redis设置值
 * @param {String} key 
 * @param {String|Object} val 
 * @param {Number} timeout 过期时间，单位：s 
 */
function set(key,val,timeout=60*60){
    if(typeof val === 'object'){
        val = JSON.stringify(val) 
    }
    rdclient.set(key,val)
    // 设置过期时间
    rdclient.expire(key,timeout)
}
/**
 * redis获取值
 * @param {*} key 通过key值获取value 
 */
function get(key){
    return new Promise((resolve,reject) =>{
        rdclient.get(key,(error,val)=>{
            if(error){
                reject(error)
                return
            }
            if(val == null){
                resolve(null)
                return
            }
            try {
                resolve(JSON.parse(val))
            } catch (error) {
                resolve(val)
            }
        })
    })
}

module.exports = {
    set,
    get
}