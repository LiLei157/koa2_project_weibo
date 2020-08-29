/**
 * @description:用户登录，注册等api单元测试
 * @author li lei
 */
const server = require('../server')
// 模拟用户账号密码
const userName = `u_${Date.now()}`
const password = `u_${Date.now()}`
// 测试数据
const testUser = {
    userName,
    password,
    nickName:userName,
    gender:1
}

let COOKIE = ''
/**
 * 测试用户注册
 */
test('测试注册用户，是否符合预期?',async ()=>{
    let res = await server.post('/api/user/register').send(testUser)
    expect(res.body.errno).toBe(0)
})
/**
 * 重复注册，应该注册失败,res不应该为0
 */
test('重复注册该用户信息，不应该注册成功',async ()=>{
    let res = await server.post('/api/user/register').send(testUser)
    expect(res.body.errno).not.toBe(0)
})
/**
 * 测试用户名是否存在
 */
test('测试当前用户名是否已经存在? 应该已经存在',async()=>{
    let res = await server.post('/api/user/isExist').send({userName})
    expect(res.body.errno).toBe(0)
})
/**
 * json schema 用户数据检测
 */
test('测试用户的数据格式是否符合预期，应该符合',async ()=>{
    let res = await server.post('/api/user/register').send({
        userName:'1zhangsan',
        password:'12',
        gender:'1',
        nickName:userName
    })
    expect(res.body.errno).not.toBe(0)
})
/**
 * 测试登录
 */
test('测试用户登录是否能成功，应该登录成功',async ()=>{
    let res = await server.post('/api/user/login').send({userName,password})
    expect(res.body.errno).toBe(0)
    // 获取cookie,res.headers['set-cookie']中存储的cookie是数据的形式，以;拼接成字符串
    COOKIE = res.headers['set-cookie'].join(';')
})
/**
 * 删除用户测试数据
 */
test('删除用户测试数据，应该删除成功',async ()=>{
    let res = await server.post('/api/user/delete').set('cookie',COOKIE)
    expect(res.body.errno).toBe(0)
})
/**
 * 当删除当前用户数据后，再次判断是否存在当前用户信息
 */
test('删除当前用户信息后，当前用户不应该存在',async ()=>{
    let res = await server.post('/api/user/isExist').send({userName})
    expect(res.body.errno).not.toBe(0)
})