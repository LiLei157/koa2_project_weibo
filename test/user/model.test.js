/**
 * @description 单元测试User 模型
 */
const {User} = require('../../src/db/model/index')  // 导入User模型

test('单元测试User Model每个属性，是否符合符合预期?',()=>{
    // 通过build()方法构建一个存储于内存的实例
    const user = User.build({
        userName:'zhangsan',
        password:'123',
        gender:1,
        nickName:'张三',
        picture:'/xxx.png',
        city:'北京'
    })
    expect(user.userName).toBe('zhangsan')
    expect(user.password).toBe('123')
    expect(user.gender).toBe(1)
    expect(user.picture).toBe('/xxx.png')
    expect(user.nickName).toBe('张三')
    expect(user.city).toBe('北京')
})