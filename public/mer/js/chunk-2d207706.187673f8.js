(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d207706"],{a111:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"divBox"},[e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[e("el-button",{staticClass:"mr20",attrs:{size:"mini",icon:"el-icon-back"},on:{click:t.back}},[t._v("返回")]),t._v(" "),e("el-button",{attrs:{size:"small",type:"primary"},on:{click:t.onAdd}},[t._v("添加组合数据")])],1),t._v(" "),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"small"}},[t._l(t.columns,(function(a,i){return e("el-table-column",{key:i,attrs:{prop:a.key,label:a.title,"min-width":a.minWidth},scopedSlots:t._u([{key:"default",fn:function(i){return[["img","image","pic"].indexOf(a.key)>-1?e("div",{staticClass:"demo-image__preview"},[e("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:i.row[a.key],"preview-src-list":[i.row[a.key]]}})],1):e("span",[t._v(t._s(i.row[a.key]))])]}}],null,!0)})})),t._v(" "),e("el-table-column",{attrs:{prop:"status",label:"是否显示","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(e){return t.onchangeIsShow(a.row)}},model:{value:a.row.status,callback:function(e){t.$set(a.row,"status",e)},expression:"scope.row.status"}})]}}])}),t._v(" "),e("el-table-column",{attrs:{label:"操作","min-width":"100",fixed:"right"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.onEdit(a.row.group_data_id)}}},[t._v("编辑")]),t._v(" "),e("el-button",{attrs:{type:"text",size:"small"},on:{click:function(e){return t.handleDelete(a.row.group_data_id,a.$index)}}},[t._v("删除")])]}}])})],2),t._v(" "),e("div",{staticClass:"block"},[e("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableData.limit,"current-page":t.tableData.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1)],1)},n=[],s=(e("7f7f"),e("ac6a"),e("8593")),o={name:"Data",data:function(){return{tableData:{page:1,limit:20,data:[],total:0},loading:!1,groupId:null,groupDetail:null}},computed:{columns:function(){if(!this.groupDetail)return[];var t=[{title:"ID",key:"group_data_id",minWidth:60}];return this.groupDetail.fields.forEach((function(a){t.push({title:a.name,key:a.field,minWidth:80})})),t.push({title:"添加时间",key:"create_time",minWidth:200}),t}},watch:{"$route.params.id":function(t){this.groupId=t},groupId:function(t){this.getGroupDetail(t)}},mounted:function(){this.groupId=this.$route.params.id},methods:{back:function(){this.$router.push({path:"/group/list"})},getGroupDetail:function(t){var a=this;Object(s["k"])(t).then((function(t){a.groupDetail=t.data,a.tableData.page=1,a.getList()}))},getList:function(){var t=this;this.groupId&&(this.loading=!0,Object(s["j"])(this.$route.params.id,this.tableData.page,this.tableData.limit).then((function(a){t.tableData.data=a.data.list,t.tableData.total=a.data.count,t.loading=!1})).catch((function(a){t.loading=!1,t.$message.error(a.message)})))},pageChange:function(t){this.tableData.page=t,this.getList()},handleSizeChange:function(t){this.tableData.limit=t,this.getList()},onAdd:function(){var t=this;this.$modalForm(Object(s["f"])(this.$route.params.id)).then((function(){return t.getList()}))},onEdit:function(t){var a=this;this.$modalForm(Object(s["u"])(this.$route.params.id,t)).then((function(){return a.getList()}))},onchangeIsShow:function(t){},handleDelete:function(t,a){var e=this;this.$modalSure().then((function(){Object(s["h"])(t).then((function(t){var i=t.message;e.$message.success(i),e.tableData.data.splice(a,1)})).catch((function(t){var a=t.message;e.$message.error(a)}))}))}}},l=o,r=e("2877"),u=Object(r["a"])(l,i,n,!1,null,"637c8c99",null);a["default"]=u.exports}}]);