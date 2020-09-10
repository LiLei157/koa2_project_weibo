define({ "api": [
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "src/main.js",
    "group": "F:\\nodejs相关\\project_demo\\boke_project\\koa2_project_weibo\\src\\main.js",
    "groupTitle": "F:\\nodejs相关\\project_demo\\boke_project\\koa2_project_weibo\\src\\main.js",
    "name": ""
  },
  {
    "type": "POST",
    "url": "/api/user/changeInfo",
    "title": "修改用户信息：昵称，城市和头像",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nickName",
            "description": "<p>昵称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "city",
            "description": "<p>城市</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "picture",
            "description": "<p>图片url</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    errno:0,\n    data:null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    errno:10008,\n    msg:\"修改基本信息失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/user.js",
    "group": "F:\\nodejs相关\\project_demo\\boke_project\\koa2_project_weibo\\src\\routes\\api\\user.js",
    "groupTitle": "F:\\nodejs相关\\project_demo\\boke_project\\koa2_project_weibo\\src\\routes\\api\\user.js",
    "name": "PostApiUserChangeinfo"
  },
  {
    "type": "post",
    "url": "/api/user/isExist",
    "title": "判断用户是否存在",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n   errno:0,\n   data:{\n       \n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n   errno:10003,\n   message:'用户名已存在'\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/user.js",
    "groupTitle": "User",
    "name": "PostApiUserIsexist"
  },
  {
    "type": "POST",
    "url": "/api/user/login",
    "title": "用户登录",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n     errno:0,\n     data:{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n     errno:10004,\n     message:\"登录失败，用户名或密码错误\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/user.js",
    "groupTitle": "User",
    "name": "PostApiUserLogin"
  },
  {
    "type": "post",
    "url": "/api/user/register",
    "title": "用户注册",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userName",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "gender",
            "description": "<p>(1:男;2:女;3:保密)</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    errno:0,\n    data:{}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    errno:10002,\n    message:\"注册失败\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/user.js",
    "groupTitle": "User",
    "name": "PostApiUserRegister"
  },
  {
    "type": "POST",
    "url": "/api/utils/upload",
    "title": "上传图片",
    "group": "Utils",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n     errno:0,\n     data:{\n         url: \"/1598691416196.touxiang.jpg\"\n     }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Response-Example",
          "content": "{\n     errno:10007,\n     message:\"上传文件尺寸过大\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/utils.js",
    "groupTitle": "Utils",
    "name": "PostApiUtilsUpload"
  }
] });
