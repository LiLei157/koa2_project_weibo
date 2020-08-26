define({ "api": [
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
  }
] });
