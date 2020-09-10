/**
 * @description 上传图片逻辑处理
 */

const { ErrorModel, SuccessModel } = require("../model/ResModel")
const {uploadFileSizeFailInfo} = require('../model/ErrorInfo')
const fse = require('fs-extra')
const path = require('path')
// 存储图片的路径
const DIST_FOLDER_PATH = path.join(__dirname,'..','..','uploadFiles')
const MAX_SIZE = 1024*1024*1024    // 限定图片大小最大为1M
// 判断是否需要创建目录
fse.pathExists(DIST_FOLDER_PATH).then(exist =>{
    // 如果没有该目录，就根据该目录创建文件
    if(!exist){
        fse.ensureDir(DIST_FOLDER_PATH)
    }
})

/**
 * @param {String} name 文件名 
 * @param {String} type 文件类型 
 * @param {Number} size 文件大小 
 * @param {String} filePath 文件目录 
 */
async function saveFile({name,type,size,filePath}){
    if(size > MAX_SIZE){
        // 文件过大，应该先把上传的这个文件清除掉
        await fse.remove(filePath)
        return new ErrorModel(uploadFileSizeFailInfo)
    }
    // 移动文件
    const fileName = Date.now()+'.'+name    // 防止文件重名,时间戳拼接文件名
    const distFilePath = path.join(DIST_FOLDER_PATH,fileName)
    await fse.move(filePath,distFilePath)   // 更改filePath目录为distFilePath
    return new SuccessModel({
        url:'/'+fileName
    })
}
module.exports = {
    saveFile
}