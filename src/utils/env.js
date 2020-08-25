/*
 * @Author: your name
 * @Date: 2020-08-24 17:29:46
 * @LastEditTime: 2020-08-24 17:41:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \koa2_project_weibo\src\utils\env.js
 */
const ENV = process.env.NODE_ENV

module.exports = {
    isDev:ENV === 'dev',
    notDev:ENV !== 'dev',
    isProd:ENV === 'production',
    notProd:ENV !== 'production',
    isTest:ENV === 'test',
    notTest:ENV !== 'test'
}
