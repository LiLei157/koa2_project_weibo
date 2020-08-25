
/**
 * @description:封装的ajax请求
 */
(function (window,$){
    // 把ajax暴露到window全局中
    if(window.ajax != null){
        console.log('window.ajax已占用')
        return
    }
    window.ajax = {}

    // get 请求
    window.ajax.get = function (url, callback) {
        ajaxFn('get', url, null, callback)
    }
    // post 请求
    window.ajax.post = function (url, params, callback) {
        if (typeof params === 'function') {
            callback = params
            params = {}
        }
        ajaxFn('post', url, params, callback)
    }
    // patch 请求
    window.ajax.patch = function (url, params, callback) {
        if (typeof params === 'function') {
            callback = params
            params = {}
        }
        ajaxFn('patch', url, params, callback)
    }
    // delete 请求
    window.ajax.delete = function (url, params, callback) {
        if (typeof params === 'function') {
            callback = params
            params = {}
        }
        ajaxFn('delete', url, params, callback)
    }
    // 上传文件
    window.ajax.upload = function (url, file, callback) {
        var formData = new FormData()
        formData.append('file', file)
        $.ajax({
            type: 'POST',
            url,
            contentType: false,
            processData: false,
            data: formData,
            success: function(res) {
                if (res.errno !== 0) {
                    // 错误
                    callback(res.message)
                    return
                }
                // 正确
                callback(null, res.data)
            },
            error: function(error) {
                // 错误
                callback(error.message)
            }
        })
    }
    /**
     * @description: 统一的ajax处理函数
     * @param {*} method 请求方法
     * @param {*} url 请求地址
     * @param {*} params 请求参数
     * @param {*} callback 回调参数 
     */
    function ajaxFn(method,url,params,callback){
        $.ajax({
            type:method.toUpperCase(),
            url:url,
            contentType:'application/json;charset=utf-8',
            data: params ? JSON.stringify(params) : '',
            success: function(res) {
                if (res.errno !== 0) {
                    // 错误
                    callback(res.message)
                    return
                }
                // 正确
                callback(null, res.data)
            },
            error: function(error) {
                // 错误
                callback(error.message)
            }
        })
    }

})(window,jQuery)