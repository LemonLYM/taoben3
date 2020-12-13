## 接口文档

### 上传图片接口

请求方式: `post` 路由: `/api/user/edit`

#### 请求参数

 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
avatar|是|string|头像|
idCardImages|是|array|身份证图片|
nickName|是|string|昵称|

#### 返回值
`{
    "status": 200,
    "message": "success"
}`

### 获取用户身份信息
请求方式:`get` 路由: `/api/user/ca`

#### 请求参数 
缺省

#### 返回值

 参数名 | 类型 | 描述
--- | --- | :---:
idCardImages|array|身份
msg|string|审核不通过信息, 如果没有消息为空字符串

    {
         "status": 200,
         "message": "success",
         "data": {
             "idCardImages": [
                 "1",
                 "2"
             ],
             "msg": ""
         }
     }