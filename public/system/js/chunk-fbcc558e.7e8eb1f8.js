(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fbcc558e"],{"2b97":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-form",{attrs:{inline:"",size:"small"}},[a("el-form-item",{attrs:{label:"关键字："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入关键字",size:"small"},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search",size:"small"},on:{click:t.getList},slot:"append"})],1)],1)],1)],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small"}},[a("el-table-column",{attrs:{prop:"feedback_id",label:"ID","min-width":"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"realname",label:"用户姓名","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"contact",label:"联系方式","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{prop:"content",label:"问题描述","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"描述图片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.images,(function(t){return a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t,"preview-src-list":[t]}})],1)}))}}])}),t._v(" "),a("el-table-column",{attrs:{label:"分类","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.type?e.row.type.cate_name:""))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"status",label:"是否显示","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(a){return t.onchangeIsShow(e.row)}},model:{value:e.row.status,callback:function(a){t.$set(e.row,"status",a)},expression:"scope.row.status"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"反馈时间","min-width":"150"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.handleDelete(e.row.feedback_id,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},s=[],i=a("3540"),r={name:"Classify",data:function(){return{tableData:{data:[],total:0},tableFrom:{page:1,limit:20,keyword:""},listLoading:!0}},mounted:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(i["g"])(this.tableFrom).then((function(e){t.tableData.data=e.data.list,t.tableData.total=e.data.count,t.listLoading=!1})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()},onchangeIsShow:function(t){var e=this;changeConfigClassifyStatus(t.config_classify_id,t.status).then((function(t){var a=t.message;e.$message.success(a)})).catch((function(t){var a=t.message;e.$message.error(a)}))},onEdit:function(t){var e=this;this.$prompt("备注内容",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"请输入备注内容",inputType:"textarea",inputPlaceholder:"请输入回复内容",inputValidator:function(t){if(!t)return"输入不能为空"}}).then((function(a){a.value;Object(i["h"])(t).then((function(t){e.$message({type:"success",message:"备注成功"}),e.getList()}))})).catch((function(){e.$message({type:"info",message:"取消输入"})}))},handleDelete:function(t,e){var a=this;this.$modalSure().then((function(){Object(i["f"])(t).then((function(t){var n=t.message;a.$message.success(n),a.tableData.data.splice(e,1)})).catch((function(t){var e=t.message;a.$message.error(e)}))}))}}},l=r,o=a("2877"),c=Object(o["a"])(l,n,s,!1,null,"48fb590c",null);e["default"]=c.exports},3540:function(t,e,a){"use strict";a.d(e,"g",(function(){return s})),a.d(e,"h",(function(){return i})),a.d(e,"f",(function(){return r})),a.d(e,"c",(function(){return l})),a.d(e,"a",(function(){return o})),a.d(e,"e",(function(){return c})),a.d(e,"b",(function(){return u})),a.d(e,"d",(function(){return d}));var n=a("0c6d");function s(t){return n["a"].get("user/feedback/lst",t)}function i(t){return n["a"].post("user/feedback/reply/".concat(t))}function r(t){return n["a"].delete("user/feedback/delete/".concat(t))}function l(t){return n["a"].get("user/feedback/category/lst",t)}function o(){return n["a"].get("user/feedback/category/create/form")}function c(t){return n["a"].get("user/feedback/category/update/".concat(t,"/form"))}function u(t){return n["a"].delete("user/feedback/category/delete/".concat(t))}function d(t,e){return n["a"].post("user/feedback/category/status/".concat(t),{status:e})}}}]);