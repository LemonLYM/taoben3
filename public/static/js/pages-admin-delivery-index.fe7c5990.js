(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-admin-delivery-index"],{"05d4":function(e,t,r){"use strict";(function(e){var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r("96cf");var n=i(r("1da1")),a=r("c38c"),o=r("7d4f"),d=r("12df"),s={name:"GoodsDeliver",components:{},props:{},data:function(){return{types:[{type:1,title:"发货"},{type:2,title:"送货"},{type:3,title:"无需发货"}],active:0,order_id:"",delivery:{user:{}},logistics:[],delivery_type:1,delivery_name:"",delivery_id:"",seIndex:0}},watch:{"$route.params.oid":function(e){var t=this;void 0!=e&&(t.order_id=e,t.getIndex())}},onLoad:function(e){this.order_id=e.id,this.getIndex(),this.expressList()},methods:{changeType:function(e,t){this.active=t,this.delivery_type=e.type,this.delivery_name="",this.delivery_id=""},getIndex:function(){var t=this,r=this;(0,a.getAdminOrderDetail)(r.order_id).then((function(i){r.delivery=i.data,e("log",t.active," at pages/admin/delivery/index.vue:131")}),(function(e){r.$util.Tips({title:e})}))},expressList:function(){var t=this;(0,o.expressList)().then((function(r){t.logistics=r.data,e("log",t.logistics," at pages/admin/delivery/index.vue:145")}),(function(e){t.$util.Tips({title:e})}))},saveInfo:function(){var e=this;return(0,n.default)(regeneratorRuntime.mark((function t(){var r,i,n,a,o,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,i=r.delivery_type,n=r.logistics[r.seIndex].value,a=r.delivery_id,o=r.delivery_name,s={},s.order_id=r.order_id,s.delivery_type=r.delivery_type,t.t0=i,t.next=2===t.t0?6:1===t.t0?14:3===t.t0?20:22;break;case 6:if(o){t.next=8;break}return t.abrupt("return",r.$util.Tips({title:"请填写送货人姓名"}));case 8:if(a&&(0,d.checkPhone)(a)){t.next=10;break}return t.abrupt("return",r.$util.Tips({title:"请填写正确的手机号码"}));case 10:return s.delivery_name=o,s.delivery_id=a,r.setInfo(s),t.abrupt("break",22);case 14:if(a){t.next=16;break}return t.abrupt("return",e.$util.Tips({title:"请填写快递单号"}));case 16:return s.delivery_name=n,s.delivery_id=a,r.setInfo(s),t.abrupt("break",22);case 20:return r.setInfo(s),t.abrupt("break",22);case 22:case"end":return t.stop()}}),t)})))()},setInfo:function(t){var r=this;e("log",t," at pages/admin/delivery/index.vue:196"),(0,a.setAdminOrderDelivery)(r.order_id,t).then((function(e){r.$util.Tips({title:e.message,icon:"success",mask:!0}),setTimeout((function(e){uni.navigateTo({url:"/pages/admin/orderList/index?types=2"})}),2e3)}),(function(t){e("log",t," at pages/admin/delivery/index.vue:211"),r.$util.Tips({title:t})}))},bindPickerChange:function(t){e("log",t,"tar"," at pages/admin/delivery/index.vue:219"),this.seIndex=t.detail.value}}};t.default=s}).call(this,r("0de9")["log"])},"12df":function(e,t,r){"use strict";function i(e){var t=/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;return!!t.test(e)}function n(e){var t=/^1(3|4|5|6|7|8|9)\d{9}$/;return!!t.test(e)}function a(e){var t=/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;return!!t.test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isMoney=i,t.checkPhone=n,t.isEmailAvailable=a},"541b":function(e,t,r){var i=r("e011");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=r("4f06").default;n("47a6e7be",i,!0,{sourceMap:!1,shadowMode:!1})},"744d":function(e,t,r){e.exports=r.p+"static/img/line.05bf1c84.jpg"},"7d4f":function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getCartCounts=a,t.getCartList=o,t.changeCartNum=d,t.cartDel=s,t.getOrderList=u,t.orderProduct=l,t.orderComment=c,t.orderPay=f,t.orderData=v,t.unOrderCancel=p,t.orderDel=g,t.getOrderDetail=m,t.groupOrderDetail=h,t.getPayOrder=w,t.orderAgain=y,t.orderTake=b,t.express=_,t.ordeRefundReason=x,t.orderRefundVerify=k,t.orderConfirm=C,t.getCouponsOrderPrice=A,t.postOrderComputed=O,t.orderCreate=$,t.groupOrderList=z,t.refundBatch=P,t.refundProduct=I,t.refundApply=T,t.refundMessage=D,t.refundList=L,t.refundDetail=M,t.expressList=j,t.refundBackGoods=R,t.refundDel=S,t.refundExpress=E,t.verifyCode=B;var n=i(r("112d"));function a(){return n.default.get("user/cart/count")}function o(){return n.default.get("user/cart/lst")}function d(e,t){return n.default.post("user/cart/change/"+e,t)}function s(e){return n.default.post("user/cart/delete",e)}function u(e){return n.default.get("order/list",e)}function l(e){return n.default.get("reply/product/"+e)}function c(e,t){return n.default.post("reply/"+e,t)}function f(e,t){return n.default.post("order/pay/"+e,t)}function v(){return n.default.get("order/number")}function p(e){return n.default.post("order/cancel/"+e)}function g(e){return n.default.post("order/del/"+e)}function m(e){return n.default.get("order/detail/"+e)}function h(e){return n.default.get("order/group_order_detail/"+e)}function w(e){return n.default.get("order/status/"+e)}function y(e){return n.default.post("user/cart/again",e)}function b(e){return n.default.post("order/take/"+e)}function _(e){return n.default.post("order/express/"+e)}function x(){return n.default.get("order/refund/reason")}function k(e){return n.default.post("order/refund/verify",e)}function C(e){return n.default.post("order/check",e)}function A(e,t){return n.default.get("coupons/order/"+e,t)}function O(e,t){return n.default.post("/order/computed/"+e,t)}function $(e){return n.default.post("order/create",e,{noAuth:!0})}function z(e){return n.default.get("order/group_order_list",e,{noAuth:!0})}function P(e){return n.default.get("refund/batch_product/"+e,{noAuth:!0})}function I(e,t){return n.default.get("refund/product/"+e,t,{noAuth:!0})}function T(e,t){return n.default.post("refund/apply/"+e,t,{noAuth:!0})}function D(){return n.default.get("common/refund_message",{noAuth:!0})}function L(e){return n.default.get("refund/list",e,{noAuth:!0})}function M(e){return n.default.get("refund/detail/"+e,{noAuth:!0})}function j(){return n.default.get("common/express")}function R(e,t){return n.default.post("refund/back_goods/"+e,t,{noAuth:!0})}function S(e){return n.default.post("refund/del/"+e,{noAuth:!0})}function E(e){return n.default.get("refund/express/"+e,{noAuth:!0})}function B(e){return n.default.get("order/verify_code/"+e)}},"99a6":function(e,t,r){"use strict";var i;r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return i}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"deliver-goods"},[i("header",[i("v-uni-view",{staticClass:"order-num acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"num line1"},[e._v("订单号："+e._s(e.delivery.order_sn))]),i("v-uni-view",{staticClass:"name line1"},[i("span",{staticClass:"iconfont icon-yonghu2"}),e._v(e._s(e.delivery.user.nickname))])],1),i("v-uni-view",{staticClass:"address"},[i("v-uni-view",{staticClass:"name"},[e._v(e._s(e.delivery.real_name)),i("span",{staticClass:"phone"},[e._v(e._s(e.delivery.user_phone))])]),i("v-uni-view",[e._v(e._s(e.delivery.user_address))])],1),i("v-uni-view",{staticClass:"line"},[i("v-uni-image",{attrs:{src:r("744d")}})],1)],1),i("v-uni-view",{staticClass:"wrapper"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("发货方式")]),i("v-uni-view",{staticClass:"mode acea-row row-middle row-right"},e._l(e.types,(function(t,r){return i("v-uni-view",{key:r,staticClass:"goods",class:e.active===r?"on":"",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.changeType(t,r)}}},[e._v(e._s(t.title)),i("span",{staticClass:"iconfont icon-xuanzhong2"})])})),1)],1),e.logistics.length>0?[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===e.active,expression:"active === 0"}],staticClass:"list"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("快递名称")]),i("v-uni-view",{staticClass:"select-box"},[i("v-uni-picker",{staticClass:"pickerBox",attrs:{value:e.seIndex,range:e.logistics,"range-key":"label"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.bindPickerChange.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-input"},[e._v(e._s(e.logistics[e.seIndex].label))])],1)],1)],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("快递单号")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写快递单号"},model:{value:e.delivery_id,callback:function(t){e.delivery_id=t},expression:"delivery_id"}})],1)],1)]:e._e(),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===e.active,expression:"active === 1"}],staticClass:"list"},[i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("送货人")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写送货人"},model:{value:e.delivery_name,callback:function(t){e.delivery_name=t},expression:"delivery_name"}})],1),i("v-uni-view",{staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",[e._v("送货电话")]),i("v-uni-input",{staticClass:"mode",attrs:{type:"text",placeholder:"填写送货电话"},model:{value:e.delivery_id,callback:function(t){e.delivery_id=t},expression:"delivery_id"}})],1)],1)],2),i("v-uni-view",{staticStyle:{height:"1.2rem"}}),i("v-uni-view",{staticClass:"confirm",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.saveInfo.apply(void 0,arguments)}}},[e._v("确认提交")])],1)},a=[]},b18d:function(e,t,r){"use strict";r.r(t);var i=r("99a6"),n=r("ed52");for(var a in n)"default"!==a&&function(e){r.d(t,e,(function(){return n[e]}))}(a);r("e744");var o,d=r("f0c5"),s=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"698421a4",null,!1,i["a"],o);t["default"]=s.exports},c38c:function(e,t,r){"use strict";var i=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.getStatisticsInfo=a,t.getStatisticsMonth=o,t.getAdminOrderList=d,t.setAdminOrderPrice=s,t.setAdminOrderRemark=u,t.getAdminOrderDetail=l,t.getAdminOrderDelivery=c,t.setAdminOrderDelivery=f,t.getStatisticsTime=v,t.setOfflinePay=p,t.setOrderRefund=g,t.getLogistics=m,t.orderVerific=h,t.verifierOrder=w,t.orderStatistics=y,t.orderPrice=b,t.getOrderList=_,t.turnoverStatistics=x,t.orderNumberStatistics=k;var n=i(r("112d"));function a(){return n.default.get("admin/order/statistics",{},{login:!0})}function o(e){return n.default.get("admin/order/data",e,{login:!0})}function d(e){return n.default.get("admin/order/list",e,{login:!0})}function s(e,t){return n.default.post("admin/price/"+e,t,{login:!0})}function u(e,t){return n.default.post("admin/mark/"+e,t,{login:!0})}function l(e){return n.default.get("admin/order/"+e,{},{login:!0})}function c(e){return n.default.get("admin/order/delivery/gain/"+e,{},{login:!0})}function f(e,t){return n.default.post("admin/delivery/"+e,t,{login:!0})}function v(e){return n.default.get("admin/order/time",e,{login:!0})}function p(e){return n.default.post("admin/order/offline",e,{login:!0})}function g(e){return n.default.post("admin/order/refund",e,{login:!0})}function m(){return n.default.get("logistics",{},{login:!1})}function h(e){return n.default.post("verifier/"+e)}function w(e){return n.default.get("verifier/order/"+e)}function y(){return n.default.get("admin/statistics")}function b(e){return n.default.get("admin/order_price",e,{login:!0})}function _(e){return n.default.get("admin/order_list",e,{login:!0})}function x(e){return n.default.get("admin/pay_price",e,{login:!0})}function k(e){return n.default.get("admin/pay_number",e,{login:!0})}},e011:function(e,t,r){var i=r("24fb");t=i(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*发货*/.uni-input[data-v-698421a4]{display:block;width:%?400?%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.deliver-goods header[data-v-698421a4]{width:100%;background-color:#fff;margin-top:%?10?%}.deliver-goods header .order-num[data-v-698421a4]{padding:0 %?30?%;border-bottom:1px solid #f5f5f5;height:%?67?%}.deliver-goods header .order-num .num[data-v-698421a4]{width:%?430?%;font-size:%?26?%;color:#282828;position:relative}.deliver-goods header .order-num .num[data-v-698421a4]:after{position:absolute;content:"";width:1px;height:%?30?%;background-color:#ddd;top:50%;margin-top:%?-15?%;right:0}.deliver-goods header .order-num .name[data-v-698421a4]{width:%?260?%;font-size:%?26?%;color:#282828;text-align:center}.deliver-goods header .order-num .name .iconfont[data-v-698421a4]{font-size:%?35?%;color:#477ef3;vertical-align:middle;margin-right:%?10?%}.deliver-goods header .address[data-v-698421a4]{font-size:%?26?%;color:#868686;background-color:#fff;padding:%?30?%}.deliver-goods header .address .name[data-v-698421a4]{font-size:%?34?%;color:#282828;margin-bottom:%?10?%}.deliver-goods header .address .name .phone[data-v-698421a4]{margin-left:%?40?%}.deliver-goods header .line[data-v-698421a4]{width:100%;height:%?3?%}.deliver-goods header .line uni-image[data-v-698421a4]{width:100%;height:100%;display:block}.deliver-goods .wrapper[data-v-698421a4]{width:100%;background-color:#fff}.deliver-goods .wrapper .item[data-v-698421a4]{border-bottom:1px solid #f0f0f0;padding:0 %?30?%;height:%?96?%;font-size:%?32?%;color:#282828;position:relative}.deliver-goods .wrapper .item .mode[data-v-698421a4]{width:%?460?%;height:100%;text-align:right}.deliver-goods .wrapper .item .mode .iconfont[data-v-698421a4]{font-size:%?30?%;margin-left:%?13?%}.deliver-goods .wrapper .item .mode .goods ~ .goods[data-v-698421a4]{margin-left:%?30?%}.deliver-goods .wrapper .item .mode .goods[data-v-698421a4]{color:#bbb}.deliver-goods .wrapper .item .mode .goods.on[data-v-698421a4]{color:#477ef3}.deliver-goods .wrapper .item .icon-up[data-v-698421a4]{position:absolute;font-size:%?35?%;color:#2c2c2c;right:%?30?%}.deliver-goods .wrapper .item select[data-v-698421a4]{direction:rtl;padding-right:%?60?%;position:relative;z-index:2}.deliver-goods .wrapper .item uni-input[data-v-698421a4]::-webkit-input-placeholder{color:#bbb}.deliver-goods .wrapper .item uni-input[data-v-698421a4]::placeholder{color:#bbb}.deliver-goods .confirm[data-v-698421a4]{font-size:%?32?%;color:#fff;width:100%;height:%?100?%;background-color:#477ef3;text-align:center;line-height:%?100?%;position:fixed;bottom:0}.select-box[data-v-698421a4]{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:100%}.select-box .pickerBox[data-v-698421a4]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;width:100%;height:100%;text-align:right}',""]),e.exports=t},e744:function(e,t,r){"use strict";var i=r("541b"),n=r.n(i);n.a},ed52:function(e,t,r){"use strict";r.r(t);var i=r("05d4"),n=r.n(i);for(var a in i)"default"!==a&&function(e){r.d(t,e,(function(){return i[e]}))}(a);t["default"]=n.a}}]);