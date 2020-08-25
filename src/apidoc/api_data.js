define({ "api": [
  {
    "type": "",
    "url": "(GET)",
    "title": "/api/user/isExist",
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
          "content": "{\n   \"state\":0,\n   \"createTime\": \"1568901681\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/routes/api/user.js",
    "groupTitle": "User",
    "name": "Get"
  }
] });