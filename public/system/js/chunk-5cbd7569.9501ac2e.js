(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5cbd7569"],{"227b":function(t,e,n){"use strict";var r=n("dc28"),a=n.n(r);a.a},8283:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"divBox"},[n("el-card",{staticClass:"box-card"},[n("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[n("div",{staticClass:"container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",{staticClass:"mr10",staticStyle:{width:"100%"},attrs:{label:"时间选择："}},[n("el-radio-group",{staticClass:"mr20",attrs:{type:"button",size:"small"},on:{change:function(e){return t.selectChange(t.tableFrom.date)}},model:{value:t.tableFrom.date,callback:function(e){t.$set(t.tableFrom,"date",e)},expression:"tableFrom.date"}},t._l(t.fromList.fromTxt,(function(e,r){return n("el-radio-button",{key:r,attrs:{label:e.val}},[t._v(t._s(e.text))])})),1),t._v(" "),n("el-date-picker",{staticStyle:{width:"260px"},attrs:{"value-format":"yyyy/MM/dd",format:"yyyy/MM/dd",size:"small",type:"daterange",placement:"bottom-end",placeholder:"自定义时间"},on:{change:t.onchangeTime},model:{value:t.timeVal,callback:function(e){t.timeVal=e},expression:"timeVal"}})],1),t._v(" "),n("el-form-item",{staticClass:"mr10",attrs:{label:"用户名称："}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入用户名称",size:"small"},model:{value:t.tableFrom.nickname,callback:function(e){t.$set(t.tableFrom,"nickname",e)},expression:"tableFrom.nickname"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),n("el-form-item",{staticClass:"mr10",attrs:{label:"关键字搜索："}},[n("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入商品ID或者商品信息",size:"small"},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[n("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:function(e){return t.getList(1)}},slot:"append"})],1)],1),t._v(" "),n("el-form-item",{staticClass:"mr10",attrs:{label:"评价状态："}},[n("el-select",{staticClass:"selWidth",attrs:{clearable:"",placeholder:"请选择"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.is_reply,callback:function(e){t.$set(t.tableFrom,"is_reply",e)},expression:"tableFrom.is_reply"}},[n("el-option",{attrs:{label:"已回复",value:"1"}}),t._v(" "),n("el-option",{attrs:{label:"未回复",value:"0"}})],1)],1)],1)],1),t._v(" "),n("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.add}},[t._v("添加虚拟评论")])],1),t._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"}},[n("el-table-column",{attrs:{prop:"reply_id",label:"ID","min-width":"50"}}),t._v(" "),n("el-table-column",{attrs:{label:"商品图","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("div",{staticClass:"demo-image__preview"},[n("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.image,"preview-src-list":[t.row.image]}})],1)]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"store_name",label:"商品名称","min-width":"200"}}),t._v(" "),n("el-table-column",{attrs:{prop:"nickname",label:"用户名称","min-width":"90"}}),t._v(" "),n("el-table-column",{attrs:{prop:"product_score",label:"产品评分",sortable:"","min-width":"100"}}),t._v(" "),n("el-table-column",{attrs:{label:"评价内容","min-width":"210"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("div",{staticClass:"mb5 content_font"},[t._v(t._s(e.row.comment))]),t._v(" "),n("div",{staticClass:"demo-image__preview"},t._l(e.row.pics,(function(t,e){return n("el-image",{key:e,staticClass:"mr5",attrs:{src:t,"preview-src-list":[t]}})})),1)]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"merchant_reply_content",label:"回复内容","min-width":"250"}}),t._v(" "),n("el-table-column",{attrs:{label:"评价时间","min-width":"150",prop:"create_time"}}),t._v(" "),n("el-table-column",{attrs:{label:"操作","min-width":"80",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"small"},on:{click:function(n){return t.handleDelete(e.row.reply_id,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),n("div",{staticClass:"block"},[n("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},a=[],o=n("c4c8"),i=n("e572"),l={name:"StoreComment",data:function(){return{fromList:i["a"],tableData:{data:[],total:0},listLoading:!0,tableFrom:{page:1,limit:20,is_reply:"",date:"",nickname:"",keyword:""},timeVal:[],props:{}}},mounted:function(){this.getList(1)},methods:{add:function(){var t=this;this.$modalForm(Object(o["u"])("")).then((function(){return t.getList(1)}))},selectChange:function(t){this.tableFrom.date=t,this.timeVal=[],this.tableFrom.page=1,this.getList(1)},onchangeTime:function(t){this.timeVal=t,this.tableFrom.date=this.timeVal?this.timeVal.join("-"):"",this.tableFrom.page=1,this.getList(1)},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(o["w"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList("")},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList("")},handleDelete:function(t,e){var n=this;this.$modalSure().then((function(){Object(o["v"])(t).then((function(t){var r=t.message;n.$message.success(r),n.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;n.$message.error(e)}))}))}}},c=l,s=(n("227b"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,"0688f458",null);e["default"]=u.exports},c4c8:function(t,e,n){"use strict";n.d(e,"H",(function(){return a})),n.d(e,"F",(function(){return o})),n.d(e,"J",(function(){return i})),n.d(e,"G",(function(){return l})),n.d(e,"I",(function(){return c})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return u})),n.d(e,"e",(function(){return d})),n.d(e,"b",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"h",(function(){return p})),n.d(e,"f",(function(){return b})),n.d(e,"j",(function(){return g})),n.d(e,"g",(function(){return h})),n.d(e,"i",(function(){return v})),n.d(e,"q",(function(){return y})),n.d(e,"B",(function(){return _})),n.d(e,"k",(function(){return k})),n.d(e,"p",(function(){return w})),n.d(e,"A",(function(){return x})),n.d(e,"s",(function(){return F})),n.d(e,"D",(function(){return C})),n.d(e,"n",(function(){return L})),n.d(e,"y",(function(){return z})),n.d(e,"w",(function(){return D})),n.d(e,"u",(function(){return S})),n.d(e,"v",(function(){return $})),n.d(e,"m",(function(){return V})),n.d(e,"o",(function(){return j})),n.d(e,"z",(function(){return M})),n.d(e,"r",(function(){return O})),n.d(e,"C",(function(){return T})),n.d(e,"t",(function(){return I})),n.d(e,"E",(function(){return J})),n.d(e,"l",(function(){return W})),n.d(e,"x",(function(){return B})),n.d(e,"K",(function(){return E}));var r=n("0c6d");function a(){return r["a"].get("store/category/lst")}function o(){return r["a"].get("store/category/create/form")}function i(t){return r["a"].get("store/category/update/form/".concat(t))}function l(t){return r["a"].delete("store/category/delete/".concat(t))}function c(t,e){return r["a"].post("store/category/status/".concat(t),{status:e})}function s(t){return r["a"].get("store/brand/category/lst",t)}function u(){return r["a"].get("store/brand/category/create/form")}function d(t){return r["a"].get("store/brand/category/update/form/".concat(t))}function f(t){return r["a"].delete("store/brand/category/delete/".concat(t))}function m(t,e){return r["a"].post("store/brand/category/status/".concat(t),{status:e})}function p(t){return r["a"].get("store/brand/lst",t)}function b(){return r["a"].get("store/brand/create/form")}function g(t){return r["a"].get("store/brand/update/form/".concat(t))}function h(t){return r["a"].delete("store/brand/delete/".concat(t))}function v(t,e){return r["a"].post("store/brand/status/".concat(t),{status:e})}function y(t){return r["a"].get("store/product/lst",t)}function _(t){return r["a"].get("seckill/product/lst",t)}function k(){return r["a"].get("store/category/list")}function w(t){return r["a"].get("store/product/detail/".concat(t))}function x(t){return r["a"].get("seckill/product/detail/".concat(t))}function F(t){return r["a"].post("store/product/status",t)}function C(t){return r["a"].post("seckill/product/status",t)}function L(){return r["a"].get("store/product/lst_filter")}function z(){return r["a"].get("seckill/product/lst_filter")}function D(t){return r["a"].get("store/reply/lst",t)}function S(t){return r["a"].get(t?"store/reply/create/form/".concat(t):"store/reply/create/form")}function $(t){return r["a"].delete("store/reply/delete/".concat(t))}function V(t){return r["a"].get("store/product/list",t)}function j(){return r["a"].get("store/product/mer_select")}function M(){return r["a"].get("seckill/product/mer_select")}function O(t){return r["a"].post("store/product/status",t)}function T(t){return r["a"].post("seckill/product/status",t)}function I(t,e){return r["a"].post("store/product/update/".concat(t),e)}function J(t,e){return r["a"].post("seckill/product/update/".concat(t),e)}function W(t,e){return r["a"].post("store/product/change/".concat(t),{status:e})}function B(t,e){return r["a"].post("seckill/product/change/".concat(t),{status:e})}function E(t){return r["a"].get("store/product/ficti/form/".concat(t))}},dc28:function(t,e,n){},e572:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r=[{label:"开启",value:1},{label:"关闭",value:0}],a={title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"昨天",val:"yesterday"},{text:"最近7天",val:"lately7"},{text:"最近30天",val:"lately30"},{text:"本月",val:"month"},{text:"本年",val:"year"}]}}}]);