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
     
### 获取用户信息
请求方式:`get` 路由: `/api/user`

#### 请求参数
缺省

#### 返回参数

| 参数名 | 类型 | 描述 |
| --- | --- | ---
| uid| int|
| wechat_user_id| int| 微信用户id
| account| string| 账号
| sex| int|性别
| nickname| string|昵称
| avatar| string|头像
| phone| string|手机
| now_money| float(10,2)|当前余额
| user_type| string| 用户类型
| promoter_time| timestamp|成功推广时间
| is_promoter| int|是否为推广员
| main_uid| int |主账号
| pay_count| float(10,2) |用户购买次数
| pay_price| float(10,2) |用户消费金额
| spread_count| int|下级人数
| service| int|
| total_consume| int|
| total_collect_product| int|
| total_collect_store| int|
| total_coupon| int|
| total_visit_product| int|
| total_unread| int|
| total_recharge| int|
| mer_ca| int|商户认证
| user_ca| int|用户认证
        
        
    {
        "status": 200,
        "message": "success",
        "data": {
            "uid": 3,
            "wechat_user_id": 0,
            "account": "18126392048",
            "sex": 0,
            "nickname": "111",
            "avatar": "/pages/user/index",
            "phone": null,
            "now_money": "0.00",
            "user_type": "",
            "promoter_time": null,
            "is_promoter": 0,
            "main_uid": 0,
            "pay_count": 0,
            "pay_price": "0.00",
            "spread_count": 0,
            "user_ca": 0,
            "mer_ca": 0,
            "service": null,
            "total_consume": 0,
            "total_collect_product": 0,
            "total_collect_store": 0,
            "total_coupon": 0,
            "total_visit_product": 0,
            "total_unread": 0,
            "total_recharge": 0
        }
    }
    
### 用户认证审核
请求方式:`post` 路由: `sys/user/intention/ca/{uid}`

#### 请求参数
 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
uid|是|int|用户id|
action|是|int |动作|
msg|否| string |认证消息|

#### 返回值
缺省


### 上传商户认证信息
请求方式:`post` 路由: `/admin/user/ca`

#### 请求参数
 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
idCardImages|是|array|身份证图片|
merCaImage|是|string |商户证书|
#### 返回参数
缺省


### 获取商户认证信息
请求方式:`post` 路由: `/admin/user/ca`

#### 请求参数
缺省

#### 返回参数
 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
idCardImages|是|array|身份证图片|
merCaImage|是|string |商户证书|

### 商户认证审核
请求方式:`post` 路由: `/sys/merchant/intention/status/{uid}`

#### 请求参数
 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
uid|是|int|用户id|
action|是|int |动作|
msg|否| string |认证消息|

#### 返回值
缺省


### 上传商品
请求方式:`post` 路由: `/api/store/product/createByUser`

#### 请求参数 

 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
store_name|是| string |商品名称|
price|是| string |价格|
cost|是| string |原价价格|
stock|是|int|库存
new_percentage|是|int|新旧程度|1-100, 100表示全新
store_info|是| string |商品描述|
content|是|string|富文本, 商品内容
image|是|string|小图|
slider_image|是|array |轮播图|
postage|是|int|邮费
province|是|string|省份
city|是|string|市
mer_cate_id|是| array |商品类别|
keyword|是| string |关键字|
attr|否|array|






以表格为准, 例子可能不是最新的
```
{
	"image": "http://apis.taoben888.cn/uploads/def/20201203/78954f5fa6447e474707d342a3f406de.png",
	"slider_image": ["http://apis.taoben888.cn/uploads/def/20201203/78954f5fa6447e474707d342a3f406de.png"],
	"store_name": "1",
	"store_info": "1",
	"keyword": "1",
	"cate_id": 244,
	"mer_cate_id": [301],
	"sort": 0,
	"temp_id": 106,
	"price": "1",
    "cost":"2",
	"attr": [],
	"content": "<p>1</p>",
}
```

#### 返回值
```
{"status":200,"message":"添加成功"}
```


### 修改商品属性
请求方式: `post` 路由:  `/api/store/product/updateByUser/{pro_id}`

#### 请求参数

同上传商品接口

#### 返回值
```
{"status":200,"message":"添加成功"}
```


### 下架商品

请求方式: `post` 路由:  `/api/store/product/status/{pro_id}`

#### 请求参数

 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
status|是|int | 0下架, 1上架|

#### 返回值

```
{"status":200,"message":"修改成功"}
```
### 获取编辑商品信息

请求方式: `post` 路由:  `/api/store/product/FromByUser/{pro_id}`

#### 请求参数

缺省

#### 返回值
```
{
    "status": 200,
    "message": "success",
    "data": {
        "product_id": 338,
        "image": "http://apis.taoben888.cn/uploads/def/20201226/956b8ce943aa0303305a60b462414b4a.png",
        "slider_image": [
            "http://apis.taoben888.cn/uploads/def/20201226/be0fb8ce1e125e2e4323a2ad1a417041.png"
        ],
        "store_name": "剧本名称",
        "store_info": "",
        "keyword": "",
        "price": "12.00",
        "cost": "12.00",
        "stock": 0,
        "new_percentage": 50,
        "province": "13267",
        "city": "13268",
        "postage": 12,
        "mer_cate_id": [
            179,
            180,
            186
        ],
        "content": "12333",
        "province_name": "广东省",
        "city_name": "深圳市",
        "attr": [],
        "seckill_status": ""
    }
}
```

### 查询商品

请求方式: `get` 路由:  `/api/store/product/lst`


#### 请求参数

 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
cate_id| 否| int| 分类|
order| 否| string| 排序, price_asc,price_desc |
price_on| 否| string| 最低价,必须是数字|
price_off| 否| string| 最高价,必须是数字|
brand_id| 否| | |
keyword| 否| string| 关键字| 要求url转码, 例如: 淘本 => %E5%89%A7%E6%9C%AC
page| 否| int| 分页 |1
limit| 否| int| 分页大小|10
province| 否| int| 省id|
city| 否| int| 市id|

#### 返回值
```
{
    "status": 200,
    "message": "success",
    "data": {
        "count": 1,
        "list": [
            {
                "product_id": 331,
                "mer_id": 65,
                "brand_id": 119,
                "unit_name": "e",
                "mer_status": 1,
                "rate": "5.0",
                "reply_count": 0,
                "store_info": "e",
                "cate_id": 172,
                "image": "http://mer.crmeb.net/uploads/def/20200816/150f1d59ec4ec02a0258dc2fc3ea85a1.jpg",
                "slider_image": [
                    "http://mer.crmeb.net/uploads/def/20200816/8175bc7b8a3a51de0b41c20f00178d7a.jpg"
                ],
                "store_name": "e",
                "keyword": "",
                "sort": 0,
                "rank": 0,
                "is_show": 1,
                "sales": 0,
                "price": null,
                "extension_type": 0,
                "refusal": null,
                "cost": null,
                "ot_price": null,
                "stock": 0,
                "is_gift_bag": 0,
                "care_count": 0,
                "status": 1,
                "is_used": 1,
                "create_time": "2020-12-26 01:13:48",
                "province": "483250",
                "city": "487721",
                "merchant": {
                    "is_trader": 0,
                    "mer_id": 65,
                    "mer_name": "千鸟格服饰旗舰店",
                    "mer_avatar": "http://mer.crmeb.net/uploads/def/20200816/49989c75324ef71956c91e79ae49b10d.jpg",
                    "product_score": "5.0",
                    "service_score": "5.0",
                    "postage_score": "5.0",
                    "service_phone": "15109234132",
                    "care_count": 13
                },
                "issetCoupon": null
            }
        ]
    }
}
```


### 我发布的商品

请求方式: `get` 路由:  `/api/store/product/my/lst`

#### 请求参数

 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
cate_id| 否| int| 分类|
order| 否| string| 排序, price_asc,price_desc |
keyword| 否| string| 关键字| 要求url转码, 例如: 淘本 => %E5%89%A7%E6%9C%AC
page| 否| int| 分页 |1
limit| 否| int| 分页大小|10

#### 返回值

同搜索接口, 而外添加参数"status"审核状态, "is_show" 上架状态

```
{
    "status": 200,
    "message": "success",
    "data": {
        "count": 1,
        "list": [
            {
                "product_id": 234,
                "mer_id": 73,
                "brand_id": 0,
                "unit_name": "",
                "mer_status": 0,
                "rate": "5.0",
                "reply_count": 0,
                "store_info": "1",
                "cate_id": 244,
                "image": "http://apis.taoben888.cn/uploads/def/20201203/78954f5fa6447e474707d342a3f406de.png",
                "slider_image": [
                    "http://apis.taoben888.cn/uploads/def/20201203/78954f5fa6447e474707d342a3f406de.png"
                ],
                "store_name": "1",
                "keyword": "1",
                "sort": 0,
                "rank": 0,
                "is_show": 0,
                "sales": 0,
                "price": "1.00",
                "extension_type": 0,
                "refusal": null,
                "cost": "0.00",
                "ot_price": "0.00",
                "stock": 0,
                "is_gift_bag": 0,
                "care_count": 0,
                "status": 0,
                "is_used": 1,
                "create_time": "2020-12-22 01:47:09",
                "province": "",
                "city": "",
                "merchant": {
                    "is_trader": 1,
                    "mer_id": 73,
                    "mer_name": "京东商城",
                    "mer_avatar": "http://mer.crmeb.net/uploads/def/20200816/49989c75324ef71956c91e79ae49b10d.jpg",
                    "product_score": "5.0",
                    "service_score": "5.0",
                    "postage_score": "5.0",
                    "service_phone": "",
                    "care_count": 0
                },
                "issetCoupon": null
            }
        ]
    }
}
```


### 获取订单
请求方式: `get` 路由:  `/api/store/order/my/lst`

#### 请求参数
 参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
keywords| 否| string |关键字|
status| 否|  int |订单类型 , 不传是全部, 1待付款,2待发货,3待收货,4待评价,5交易完成,6已退款,7已删除|
date| 否|  string| 时间筛选 "2020/12/09-2020/12/10", 或者"today", "yesterday"
page| 否| int|  分页|
limit| 否| int|分页|
username| 否| string | 用户筛选. 不知道干嘛的先不用.

#### 返回值

现有列表接口

```
{
    "status": 200,
    "message": "success",
    "data": {
        "count": 2,
        "list": [
            {
                "order_id": 4,
                "group_order_id": 4,
                "order_sn": "wx1608992110965678391",
                "uid": 1,
                "real_name": "罗怡",
                "user_phone": "18613884482",
                "user_address": "北京市北京市顺义区 顺义",
                "cart_id": "5",
                "total_num": 1,
                "total_price": "880.00",
                "total_postage": "1.00",
                "pay_price": "881.00",
                "pay_postage": "1.00",
                "extension_one": "0.00",
                "extension_two": "0.00",
                "commission_rate": "20.0000",
                "coupon_id": "",
                "coupon_price": "0.00",
                "order_type": 0,
                "paid": 0,
                "pay_time": null,
                "pay_type": 2,
                "create_time": "2020-12-26 22:15:11",
                "status": 0,
                "delivery_type": null,
                "delivery_name": null,
                "delivery_id": null,
                "mark": "",
                "remark": null,
                "admin_mark": null,
                "verify_code": null,
                "verify_time": null,
                "verify_service_id": 0,
                "mer_id": 65,
                "reconciliation_id": 0,
                "cost": "500.00",
                "is_del": 1,
                "is_system_del": 0,
                "orderProduct": [
                    {
                        "order_product_id": 4,
                        "order_id": 4,
                        "uid": 1,
                        "cart_id": 5,
                        "product_id": 6,
                        "extension_one": "0.00",
                        "extension_two": "0.00",
                        "product_sku": "0faf6fb5e600",
                        "is_refund": 0,
                        "product_num": 1,
                        "refund_num": 1,
                        "is_reply": 0,
                        "product_price": "880.00",
                        "cart_info": {
                            "product": {
                                "product_id": 6,
                                "image": "http://mer.crmeb.net/uploads/def/20200816/9a6a2e1231fb19517ed1de71206a0657.jpg",
                                "store_name": "智能定制休闲单西 布雷泽海军蓝轻薄斜纹",
                                "is_show": 1,
                                "status": 1,
                                "is_del": 0,
                                "unit_name": "件",
                                "price": "880.00",
                                "mer_status": 1,
                                "temp_id": 99,
                                "give_coupon_ids": [
                                    "1",
                                    "2"
                                ],
                                "is_gift_bag": 0,
                                "is_used": 1,
                                "product_type": 0,
                                "old_product_id": 0,
                                "temp": {
                                    "shipping_template_id": 99,
                                    "name": "运费1续费1",
                                    "type": 0,
                                    "appoint": 1,
                                    "undelivery": 1,
                                    "mer_id": 65,
                                    "is_default": 0,
                                    "sort": 1,
                                    "create_time": "2020-07-08 19:35:32",
                                    "region": [
                                        {
                                            "shipping_template_region_id": 388,
                                            "temp_id": 99,
                                            "city_id": "0",
                                            "first": "1.00",
                                            "first_price": "1.00",
                                            "continue": "1.00",
                                            "continue_price": "1.00"
                                        }
                                    ],
                                    "undelives": null,
                                    "free": []
                                }
                            },
                            "productAttr": {
                                "image": "http://mer.crmeb.net/uploads/def/20200816/9a6a2e1231fb19517ed1de71206a0657.jpg",
                                "extension_one": "0.00",
                                "extension_two": "0.00",
                                "product_id": 6,
                                "stock": 95,
                                "price": "880.00",
                                "unique": "0faf6fb5e600",
                                "sku": "",
                                "volume": "1.00",
                                "weight": "1.00",
                                "ot_price": "1680.00",
                                "cost": "500.00",
                                "bc_extension_one": 17.6,
                                "bc_extension_two": 8.8
                            },
                            "product_type": 0
                        },
                        "create_time": "2020-12-26 22:15:11"
                    }
                ],
                "merchant": {
                    "mer_id": 65,
                    "mer_name": "千鸟格服饰旗舰店"
                },
                "verifyService": null
            }
        ],
        "stat": [
            {
                "className": "el-icon-s-goods",
                "count": 0,
                "field": "件",
                "name": "已支付订单数量"
            },
            {
                "className": "el-icon-s-order",
                "count": 0,
                "field": "元",
                "name": "实际支付金额"
            },
            {
                "className": "el-icon-s-cooperation",
                "count": 0,
                "field": "元",
                "name": "已退款金额"
            },
            {
                "className": "el-icon-s-cooperation",
                "count": 0,
                "field": "元",
                "name": "微信支付金额"
            },
            {
                "className": "el-icon-s-finance",
                "count": 0,
                "field": "元",
                "name": "余额支付金额"
            }
        ]
    }
}
```

### 发货接口

请求方式: `post` 路由:  `/api/store/order/delivery/{oid}`

#### 请求参数
参数名 | 是否必须 | 类型 | 描述 | 长度
--- | --- | --- | --- | --- 
delivery_type| 是| int| 1快递, 2人工配送(先不用这个)
delivery_name| 是| int| 快递公司id
delivery_id| 是| string| 快递单号

```
{"delivery_type":1,"delivery_name":188,"delivery_id":"1121321313123"}
```

#### 返回值
```{
       "status": 200,
       "message": "发货成功"
   }
```


### 物流公司列表

请求方式: `get` 接口: `api/order/delivery/getOptions`

#### 请求参数

缺省


#### 返回参数
 参数名  | 类型 | 描述 | 长度
--- | --- | --- | ---  
data|array|物流公司模型|
data[n].label|string| 物流公司名称|
data[n].value|int| 物流公司id|

```
{
    "status": 200,
    "message": "success",
    "data": [
        {
            "label": "顺丰速运",
            "value": 188
        },
        {
            "label": "圆通速递",
            "value": 243
        }
    ]
}
```

###  我关注的商品

请求方式: `get` 接口: `api/user/relation/product/lst`

### 推荐列表
请求方式: `get` 接口: `api/store/product/recommend/ls`

#### 请求参数

 参数名  | 类型 | 描述 | 长度
--- | --- | --- | ---  
page| int |页码
limit| int |页长度


#### 返回参数

缺省, 同商品列表.

