const seq = require('../seq')
const {INTEGER,TEXT,STRING} = require('../types')

const Blog = seq.define('Blog',{
    userId:{
        type:INTEGER,
        allowNull:false,
        comment:'用户 ID'
    },
    content:{
        type:TEXT,
        allowNull:false,
        comment:'博客内容'
    },
    image:{
        type:STRING,
        comment:'图片地址'
    }
})

module.exports = Blog
