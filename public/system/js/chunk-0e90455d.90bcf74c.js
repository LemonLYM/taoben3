(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e90455d"],{"498c":function(t,e,a){"use strict";a("f92d")},6461:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dialogVisible?a("el-dialog",{staticClass:"projectInfo",attrs:{title:"商品审核",visible:t.dialogVisible,width:"900px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[t.projectData&&t.isShow?a("el-tabs",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},[a("el-tab-pane",{attrs:{label:"商品信息",name:"first"}},[a("div",{staticClass:"acea-row"},[a("span",{staticClass:"sp"},[t._v("商品名称："+t._s(t.projectData.store_name))]),t._v(" "),a("span",{staticClass:"sp"},[t._v("平台分类："+t._s(t.projectData.storeCategory?t.projectData.storeCategory.cate_name:""))]),t._v(" "),a("span",{staticClass:"sp"},[t._v("品牌："+t._s(t.projectData.brand?t.projectData.brand.brand_name:""))]),t._v(" "),a("span",{staticClass:"sp"},[t._v("商品关键字："+t._s(t.projectData.keyword))]),t._v(" "),a("span",{staticClass:"sp"},[t._v("商品单位："+t._s(t.projectData.unit_name))]),t._v(" "),a("span",{staticClass:"sp"},[t._v("运费模板："+t._s(t.projectData.temp?t.projectData.temp.name:""))]),t._v(" "),a("span",{staticClass:"sp100"},[t._v("\n          商品分类：\n          "),t.projectData.merCateId?t._l(t.projectData.merCateId,(function(e,n){return a("span",{key:n,staticClass:"mr10"},[t._v(t._s(e.category?e.category.cate_name:""))])})):a("span",[t._v("-")])],2),t._v(" "),a("span",{staticClass:"sp100"},[t._v("商品简介："+t._s(t.projectData.store_info))]),t._v(" "),a("span",{staticClass:"sp100"},[t._v("\n          商品封面图：\n          "),a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.projectData.image,"preview-src-list":[t.projectData.image]}})],1)]),t._v(" "),a("span",{staticClass:"sp100"},[t._v("商品轮播图：\n          "),t._l(t.projectData.slider_image,(function(t,e){return a("div",{key:e,staticClass:"pictrue"},[a("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t,"preview-src-list":[t]}})],1)}))],2)])]),t._v(" "),a("el-tab-pane",{attrs:{label:"商品详情",name:"second"}},[a("span",{staticClass:"sp100"},[t._v("商品详情：")]),t._v(" "),a("div",{staticClass:"contentPic",domProps:{innerHTML:t._s(t.projectData.content)}})]),t._v(" "),a("el-tab-pane",{attrs:{label:"其他设置",name:"third"}},[a("span",{staticClass:"sp100"},[t._v("商品排序："+t._s(t.projectData.sort))]),t._v(" "),a("span",{staticClass:"third mb20"},[a("span",[t._v("商品推荐：")]),t._v(" "),a("el-checkbox-group",{attrs:{size:"small"},model:{value:t.checkboxGroup,callback:function(e){t.checkboxGroup=e},expression:"checkboxGroup"}},t._l(t.recommend,(function(e,n){return a("el-checkbox",{key:n,attrs:{disabled:"",label:e.value}},[t._v(t._s(e.name))])})),1)],1)]),t._v(" "),a("el-tab-pane",{attrs:{label:"商品规格",name:"fourth"}},[a("span",{staticClass:"sp"},[t._v("商品规格："+t._s(0===t.projectData.spec_type?"单规格":"多规格"))]),t._v(" "),a("span",{staticClass:"sp"},[t._v("佣金设置："+t._s(0===t.projectData.extension_type?"默认设置":"单独设置"))]),t._v(" "),a("span",{staticClass:"sp100"},[a("span",{staticClass:"mb15",staticStyle:{display:"block"}},[t._v("商品规格:")]),t._v(" "),0===t.projectData.spec_type?[a("el-table",{staticClass:"tabNumWidth",attrs:{data:t.OneattrValue,border:"",size:"mini"}},[a("el-table-column",{attrs:{align:"center",label:"图片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:t.row.image}})],1)]}}],null,!1,323865937)}),t._v(" "),t._l(t.attrValue,(function(e,n){return a("el-table-column",{key:n,attrs:{label:t.formThead[n].title,align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox",domProps:{textContent:t._s(e.row[n])}})]}}],null,!0)})})),t._v(" "),1===t.projectData.extension_type?[a("el-table-column",{attrs:{align:"center",label:"一级返佣(元)","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox",domProps:{textContent:t._s(e.row.extension_one)}})]}}],null,!1,102250766)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"二级返佣(元)","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox",domProps:{textContent:t._s(e.row.extension_two)}})]}}],null,!1,4284057702)})]:t._e()],2)]:t._e(),t._v(" "),1===t.projectData.spec_type?[a("el-table",{staticClass:"tabNumWidth",attrs:{data:t.ManyAttrValue,border:"",size:"mini"}},[t.manyTabDate?t._l(t.manyTabDate,(function(e,n){return a("el-table-column",{key:n,attrs:{align:"center",label:t.manyTabTit[n].title,"min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox",domProps:{textContent:t._s(e.row[n])}})]}}],null,!0)})})):t._e(),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"图片","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"upLoadPicBox"},[a("div",{staticClass:"pictrue tabPic"},[a("img",{attrs:{src:t.row.image}})])])]}}],null,!1,651288578)}),t._v(" "),t._l(t.attrValue,(function(e,n){return a("el-table-column",{key:n,attrs:{label:t.formThead[n].title,align:"center","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox"},[t._v(t._s(e.row[n]))])]}}],null,!0)})})),t._v(" "),1===t.projectData.extension_type?[a("el-table-column",{attrs:{align:"center",label:"一级返佣(元)","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox"},[t._v(t._s(e.row.extension_one))])]}}],null,!1,1519547738)}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"二级返佣(元)","min-width":"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"priceBox"},[t._v(t._s(e.row.extension_two))])]}}],null,!1,603129202)})]:t._e()],2)]:t._e()],2)])],1):t._e(),t._v(" "),a("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"审核状态",prop:"status"}},[a("el-radio-group",{model:{value:t.ruleForm.status,callback:function(e){t.$set(t.ruleForm,"status",e)},expression:"ruleForm.status"}},[a("el-radio",{attrs:{label:1}},[t._v("通过")]),t._v(" "),a("el-radio",{attrs:{label:-1}},[t._v("拒绝")])],1)],1),t._v(" "),-1===t.ruleForm.status?a("el-form-item",{attrs:{label:"原因",prop:"refusal"}},[a("el-input",{attrs:{type:"textarea",placeholder:"请输入原因"},model:{value:t.ruleForm.refusal,callback:function(e){t.$set(t.ruleForm,"refusal",e)},expression:"ruleForm.refusal"}})],1):t._e(),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("提交")])],1)],1)],1):t._e()},r=[],s=(a("ac6a"),a("c4c8")),i={image:"",slider_image:[],store_name:"",store_info:"",keyword:"",brand_id:"",cate_id:"",mer_cate_id:[],unit_name:"",sort:0,is_show:0,is_benefit:0,is_new:0,is_good:0,temp_id:"",attrValue:[{image:"",price:null,cost:null,ot_price:null,stock:null,bar_code:"",weight:null,volume:null}],attr:[],selectRule:"",extension_type:0,content:"",spec_type:0},o={price:{title:"售价"},cost:{title:"成本价"},ot_price:{title:"原价"},stock:{title:"库存"},bar_code:{title:"商品编号"},weight:{title:"重量（KG）"},volume:{title:"体积(m³)"}},l=[{name:"是否热卖",value:"is_hot"},{name:"优品推荐",value:"is_good"},{name:"促销单品",value:"is_benefit"},{name:"是否精品",value:"is_best"},{name:"是否新品",value:"is_new"}],c={name:"Info",props:{isShow:{type:Boolean,default:!0},ids:{type:Array,default:function(){return[]}}},data:function(){return{rules:{status:[{required:!0,message:"请选择审核状态",trigger:"change"}],refusal:[{required:!0,message:"请填写拒绝原因",trigger:"blur"}]},proId:0,ruleForm:{refusal:"",status:1,id:""},formThead:Object.assign({},o),manyTabDate:{},manyTabTit:{},loading:!1,dialogVisible:!1,activeNames:"first",projectData:{},recommend:l,checkboxGroup:[],OneattrValue:[Object.assign({},i.attrValue[0])],ManyAttrValue:[Object.assign({},i.attrValue[0])]}},computed:{attrValue:function(){var t=Object.assign({},i.attrValue[0]);return delete t.image,t},oneFormBatch:function(){var t=[Object.assign({},i.attrValue[0])];return delete t[0].bar_code,t}},methods:{onSubmit:function(){var t=this;this.isShow?this.ruleForm.id=this.proId:this.ruleForm.id=this.ids,Object(s["s"])(this.ruleForm).then((function(e){t.$message.success(e.message),t.dialogVisible=!1,t.activeNames="first",t.$emit("subSuccess")})).catch((function(e){t.listLoading=!1,t.$message.error(e.message)}))},handleClose:function(){this.dialogVisible=!1,this.activeNames="first"},getInfo:function(t){var e=this;this.proId=t,this.loading=!0,Object(s["p"])(t).then((function(t){e.projectData=t.data,0===e.projectData.spec_type?e.OneattrValue=t.data.attrValue:e.ManyAttrValue=t.data.attrValue;var a={},n={};e.projectData.attr.forEach((function(t,e){a["value"+e]={title:t.value},n["value"+e]=""})),e.manyTabDate=n,e.manyTabTit=a,e.formThead=Object.assign({},e.formThead,a),1===e.projectData.is_hot&&e.checkboxGroup.push("is_hot"),1===e.projectData.is_good&&e.checkboxGroup.push("is_good"),1===e.projectData.is_benefit&&e.checkboxGroup.push("is_benefit"),1===e.projectData.is_best&&e.checkboxGroup.push("is_best"),1===e.projectData.is_new&&e.checkboxGroup.push("is_new"),e.loading=!1})).catch((function(t){e.$message.error(t.message),e.loading=!1}))}}},u=c,d=(a("81ca"),a("2877")),m=Object(d["a"])(u,n,r,!1,null,"44de9732",null);e["a"]=m.exports},"81ca":function(t,e,a){"use strict";a("ac25")},ac25:function(t,e,a){},c4c8:function(t,e,a){"use strict";a.d(e,"H",(function(){return r})),a.d(e,"F",(function(){return s})),a.d(e,"J",(function(){return i})),a.d(e,"G",(function(){return o})),a.d(e,"I",(function(){return l})),a.d(e,"c",(function(){return c})),a.d(e,"a",(function(){return u})),a.d(e,"e",(function(){return d})),a.d(e,"b",(function(){return m})),a.d(e,"d",(function(){return p})),a.d(e,"h",(function(){return f})),a.d(e,"f",(function(){return _})),a.d(e,"j",(function(){return b})),a.d(e,"g",(function(){return h})),a.d(e,"i",(function(){return g})),a.d(e,"q",(function(){return v})),a.d(e,"B",(function(){return w})),a.d(e,"k",(function(){return y})),a.d(e,"p",(function(){return x})),a.d(e,"A",(function(){return k})),a.d(e,"s",(function(){return C})),a.d(e,"D",(function(){return F})),a.d(e,"n",(function(){return S})),a.d(e,"y",(function(){return V})),a.d(e,"w",(function(){return j})),a.d(e,"u",(function(){return D})),a.d(e,"v",(function(){return L})),a.d(e,"m",(function(){return $})),a.d(e,"o",(function(){return O})),a.d(e,"z",(function(){return I})),a.d(e,"r",(function(){return N})),a.d(e,"C",(function(){return G})),a.d(e,"t",(function(){return E})),a.d(e,"E",(function(){return z})),a.d(e,"l",(function(){return T})),a.d(e,"x",(function(){return B})),a.d(e,"K",(function(){return P}));var n=a("0c6d");function r(){return n["a"].get("store/category/lst")}function s(){return n["a"].get("store/category/create/form")}function i(t){return n["a"].get("store/category/update/form/".concat(t))}function o(t){return n["a"].delete("store/category/delete/".concat(t))}function l(t,e){return n["a"].post("store/category/status/".concat(t),{status:e})}function c(t){return n["a"].get("store/brand/category/lst",t)}function u(){return n["a"].get("store/brand/category/create/form")}function d(t){return n["a"].get("store/brand/category/update/form/".concat(t))}function m(t){return n["a"].delete("store/brand/category/delete/".concat(t))}function p(t,e){return n["a"].post("store/brand/category/status/".concat(t),{status:e})}function f(t){return n["a"].get("store/brand/lst",t)}function _(){return n["a"].get("store/brand/create/form")}function b(t){return n["a"].get("store/brand/update/form/".concat(t))}function h(t){return n["a"].delete("store/brand/delete/".concat(t))}function g(t,e){return n["a"].post("store/brand/status/".concat(t),{status:e})}function v(t){return n["a"].get("store/product/lst",t)}function w(t){return n["a"].get("seckill/product/lst",t)}function y(){return n["a"].get("store/category/list")}function x(t){return n["a"].get("store/product/detail/".concat(t))}function k(t){return n["a"].get("seckill/product/detail/".concat(t))}function C(t){return n["a"].post("store/product/status",t)}function F(t){return n["a"].post("seckill/product/status",t)}function S(){return n["a"].get("store/product/lst_filter")}function V(){return n["a"].get("seckill/product/lst_filter")}function j(t){return n["a"].get("store/reply/lst",t)}function D(t){return n["a"].get(t?"store/reply/create/form/".concat(t):"store/reply/create/form")}function L(t){return n["a"].delete("store/reply/delete/".concat(t))}function $(t){return n["a"].get("store/product/list",t)}function O(){return n["a"].get("store/product/mer_select")}function I(){return n["a"].get("seckill/product/mer_select")}function N(t){return n["a"].post("store/product/status",t)}function G(t){return n["a"].post("seckill/product/status",t)}function E(t,e){return n["a"].post("store/product/update/".concat(t),e)}function z(t,e){return n["a"].post("seckill/product/update/".concat(t),e)}function T(t,e){return n["a"].post("store/product/change/".concat(t),{status:e})}function B(t,e){return n["a"].post("seckill/product/change/".concat(t),{status:e})}function P(t){return n["a"].get("store/product/ficti/form/".concat(t))}},ef0d:function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("vue-ueditor-wrap",{staticStyle:{width:"90%"},attrs:{config:t.myConfig},on:{beforeInit:t.addCustomDialog},model:{value:t.contents,callback:function(e){t.contents=e},expression:"contents"}})],1)},r=[],s=a("6625"),i=a.n(s),o=a("83d6"),l={name:"Index",components:{VueUeditorWrap:i.a},scrollerHeight:{content:String,default:""},props:{content:{type:String,default:""}},data:function(){return{contents:this.content,myConfig:{autoHeightEnabled:!1,initialFrameHeight:500,initialFrameWidth:"100%",UEDITOR_HOME_URL:"/UEditor/",serverUrl:"http://35.201.165.105:8000/controller.php"}}},watch:{content:function(t){this.contents=this.content},contents:function(t){this.$emit("input",t)}},created:function(){},methods:{addCustomDialog:function(t){window.UE.registerUI("test-dialog",(function(t,e){var a=new window.UE.ui.Dialog({iframeUrl:o["roterPre"]+"/setting/uploadPicture?field=dialog",editor:t,name:e,title:"上传图片",cssRules:"width:1000px;height:620px;padding:20px;"});this.dialog=a;var n=new window.UE.ui.Button({name:"dialog-button",title:"上传图片",cssRules:"background-image: url(@/assets/images/icons.png);background-position: -726px -77px;",onclick:function(){a.render(),a.open()}});return n}),37)}}},c=l,u=a("2877"),d=Object(u["a"])(c,n,r,!1,null,"2ee187e6",null);e["a"]=d.exports},f92d:function(t,e,a){},fe2f:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"divBox"},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("el-tabs",{on:{"tab-click":function(e){return t.getList(1)}},model:{value:t.tableFrom.type,callback:function(e){t.$set(t.tableFrom,"type",e)},expression:"tableFrom.type"}},t._l(t.headeNum,(function(t,e){return a("el-tab-pane",{key:e,attrs:{name:t.type.toString(),label:t.name+"("+t.count+")"}})})),1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"demo-input-suffix acea-row"},[a("el-form",{attrs:{inline:"",size:"small"}},[a("el-form-item",{attrs:{label:"商户分类："}},[a("el-cascader",{staticClass:"selWidth",attrs:{options:t.merCateList,props:t.props,clearable:""},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.cate_id,callback:function(e){t.$set(t.tableFrom,"cate_id",e)},expression:"tableFrom.cate_id"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商户名称："}},[a("el-select",{staticClass:"selWidth",attrs:{clearable:"",filterable:"",placeholder:"请选择"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.mer_id,callback:function(e){t.$set(t.tableFrom,"mer_id",e)},expression:"tableFrom.mer_id"}},t._l(t.merSelect,(function(t){return a("el-option",{key:t.mer_id,attrs:{label:t.mer_name,value:t.mer_id}})})),1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商户类别："}},[a("el-select",{staticClass:"selWidth",attrs:{clearable:"",placeholder:"请选择"},on:{change:function(e){return t.getList(1)}},model:{value:t.tableFrom.is_trader,callback:function(e){t.$set(t.tableFrom,"is_trader",e)},expression:"tableFrom.is_trader"}},[a("el-option",{attrs:{label:"自营",value:"1"}}),t._v(" "),a("el-option",{attrs:{label:"非自营",value:"0"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"商品搜索："}},[a("el-input",{staticClass:"selWidth",attrs:{placeholder:"请输入商品名称，关键字，产品编号"},model:{value:t.tableFrom.keyword,callback:function(e){t.$set(t.tableFrom,"keyword",e)},expression:"tableFrom.keyword"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:function(e){return t.getList()}},slot:"append"})],1)],1)],1)],1)]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:"6"===t.tableFrom.type,expression:"tableFrom.type === '6'"}],attrs:{size:"mini"},on:{click:t.batch}},[t._v("批量审核")]),t._v(" "),a("el-button",{directives:[{name:"show",rawName:"v-show",value:Number(t.tableFrom.type)<3,expression:"Number(tableFrom.type) < 3"}],staticStyle:{"margin-left":"0px"},attrs:{size:"mini"},on:{click:t.batchOff}},[t._v("批量强制下架")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],staticStyle:{width:"100%"},attrs:{data:t.tableData.data,size:"mini"},on:{"selection-change":t.handleSelectionChange}},[Number(t.tableFrom.type)<7?a("el-table-column",{key:"2",attrs:{type:"selection",width:"55"}}):t._e(),t._v(" "),a("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"平台分类："}},[a("span",[t._v(t._s(e.row.storeCategory?e.row.storeCategory.cate_name:"-"))])]),t._v(" "),a("el-form-item",{attrs:{label:"商品分类："}},[e.row.merCateId.length?t._l(e.row.merCateId,(function(e,n){return a("span",{key:n,staticClass:"mr10"},[t._v(t._s(e.category?e.category.cate_name:"-"))])})):a("span",[t._v("-")])],2),t._v(" "),a("el-form-item",{attrs:{label:"品牌："}},[a("span",[t._v(t._s(e.row.brand?e.row.brand.brand_name:"-"))])]),t._v(" "),a("el-form-item",{attrs:{label:"市场价格："}},[a("span",[t._v(t._s(t._f("filterEmpty")(e.row.ot_price)))])]),t._v(" "),a("el-form-item",{attrs:{label:"成本价："}},[a("span",[t._v(t._s(t._f("filterEmpty")(e.row.cost)))])]),t._v(" "),a("el-form-item",{attrs:{label:"收藏："}},[a("span",[t._v(t._s(t._f("filterEmpty")(e.row.care_count)))])]),t._v(" "),a("el-form-item",{attrs:{label:"虚拟销量："}},[a("span",[t._v(t._s(t._f("filterEmpty")(e.row.ficti)))])])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"product_id",label:"ID","min-width":"50"}}),t._v(" "),a("el-table-column",{attrs:{label:"商品图","min-width":"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",{staticClass:"demo-image__preview"},[a("el-image",{staticStyle:{width:"36px",height:"36px"},attrs:{src:t.row.image,"preview-src-list":[t.row.image]}})],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"store_name",label:"商品名称1","min-width":"200"}}),t._v(" "),a("el-table-column",{attrs:{label:"商户名称","min-width":"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.merchant?e.row.merchant.mer_name:""))])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"mer_name",label:"商户类别","min-width":"90"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.merchant?a("span",{staticClass:"spBlock"},[t._v(t._s(e.row.merchant.is_trader?"自营":"非自营"))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"商品售价","min-width":"90"}}),t._v(" "),8!=Number(t.tableFrom.type)?a("el-table-column",{attrs:{prop:"sales",label:"销量","min-width":"90"}}):t._e(),t._v(" "),8!=Number(t.tableFrom.type)?a("el-table-column",{attrs:{prop:"stock",label:"库存","min-width":"90"}}):t._e(),t._v(" "),8!=Number(t.tableFrom.type)?a("el-table-column",{attrs:{prop:"sort",label:"排序","min-width":"70"}}):t._e(),t._v(" "),8==Number(t.tableFrom.type)?a("el-table-column",{attrs:{prop:"store_info",label:"以旧换新商品描述","min-width":"300"}}):t._e(),t._v(" "),8!=Number(t.tableFrom.type)?a("el-table-column",{attrs:{prop:"status",label:"是否显示","min-width":"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-text":"显示","inactive-text":"隐藏"},on:{change:function(a){return t.onchangeIsShow(e.row)}},model:{value:e.row.is_used,callback:function(a){t.$set(e.row,"is_used",a)},expression:"scope.row.is_used"}})]}}],null,!1,378608978)}):t._e(),t._v(" "),a("el-table-column",{attrs:{prop:"create_time",label:"创建时间","min-width":"150"}}),t._v(" "),Number(t.tableFrom.type)<7?a("el-table-column",{key:"8",attrs:{label:"操作","min-width":"100",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[Number(t.tableFrom.type)<7?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onEdit(e.row.product_id)}}},[t._v("编辑")]):t._e(),t._v(" "),"6"===t.tableFrom.type||"1"===t.tableFrom.type?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.toVirtualSales(e.row.product_id)}}},[t._v("虚拟销量")]):t._e(),t._v(" "),"6"===t.tableFrom.type?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.toExamine(e.row.product_id)}}},[t._v("审核")]):t._e(),t._v(" "),Number(t.tableFrom.type)<3?a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.toOff([e.row.product_id])}}},[t._v("强制下架")]):t._e()]}}],null,!1,2487140822)}):t._e()],1),t._v(" "),a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"page-sizes":[20,40,60,80],"page-size":t.tableFrom.limit,"current-page":t.tableFrom.page,layout:"total, sizes, prev, pager, next, jumper",total:t.tableData.total},on:{"size-change":t.handleSizeChange,"current-change":t.pageChange}})],1)],1),t._v(" "),a("info-from",{ref:"infoFrom",attrs:{"is-show":t.isShow,ids:t.OffId},on:{subSuccess:t.subSuccess}}),t._v(" "),a("el-dialog",{attrs:{title:"商品编辑",visible:t.dialogVisible,width:"1000px","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-form",{directives:[{name:"loading",rawName:"v-loading",value:t.fullscreenLoading,expression:"fullscreenLoading"}],ref:"formValidate",staticClass:"formValidate mt20",attrs:{rules:t.ruleValidate,model:t.formValidate,"label-width":"100px"},nativeOn:{submit:function(t){t.preventDefault()}}},[a("el-form-item",{attrs:{label:"商品名称：",prop:"store_name"}},[a("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:t.formValidate.store_name,callback:function(e){t.$set(t.formValidate,"store_name",e)},expression:"formValidate.store_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"商品推荐："}},[a("el-checkbox-group",{attrs:{size:"small"},on:{change:t.onChangeGroup},model:{value:t.checkboxGroup,callback:function(e){t.checkboxGroup=e},expression:"checkboxGroup"}},t._l(t.recommend,(function(e,n){return a("el-checkbox",{key:n,attrs:{label:e.value}},[t._v(t._s(e.name))])})),1)],1),t._v(" "),a("el-col",{attrs:{span:24}},[a("el-form-item",{attrs:{label:"商品详情："}},[a("ueditor-from",{attrs:{content:t.formValidate.content},model:{value:t.formValidate.content,callback:function(e){t.$set(t.formValidate,"content",e)},expression:"formValidate.content"}})],1)],1),t._v(" "),a("el-form-item",{staticStyle:{"margin-top":"30px"}},[a("el-button",{staticClass:"submission",attrs:{type:"primary",size:"small"},on:{click:function(e){return t.handleSubmit("formValidate")}}},[t._v("提交")])],1)],1)],1)],1)},r=[],s=(a("6762"),a("2fdb"),a("96cf"),a("3b8d")),i=(a("7f7f"),a("c4c8")),o=a("83d6"),l=a("6461"),c=a("ef0d"),u=[{name:"热门榜单",value:"is_hot"},{name:"促销单品",value:"is_benefit"},{name:"精品推荐",value:"is_best"},{name:"首发新品",value:"is_new"}],d={name:"ProductExamine1",components:{infoFrom:l["a"],ueditorFrom:c["a"]},data:function(){return{props:{emitPath:!1},ruleValidate:{store_name:[{required:!0,message:"请输入商品名称",trigger:"blur"}]},dialogVisible:!1,checkboxGroup:[],recommend:u,formValidate:{is_hot:0,is_best:0,is_new:0,is_benefit:0,ficti:0,content:"",store_name:""},fullscreenLoading:!1,isShow:!1,roterPre:o["roterPre"],listLoading:!0,tableData:{data:[],total:0},tableFrom:{page:1,limit:20,cate_id:"",store_name:"",type:"6",mer_id:"",keyword:"",is_trader:""},categoryList:[],merCateList:[],multipleSelection:[],headeNum:[],merSelect:[],OffId:[],productId:0}},mounted:function(){this.getMerSelect(),this.getList(),this.getCategorySelect(),this.getLstFilterApi()},methods:{subSuccess:function(){this.getList(),this.getLstFilterApi()},onchangeIsShow:function(t){var e=this;Object(i["l"])(t.product_id,t.is_used).then((function(t){var a=t.message;e.$message.success(a),e.getList()})).catch((function(t){var a=t.message;e.$message.error(a)}))},getInfo:function(t){var e=this;this.fullscreenLoading=!0,this.checkboxGroup=[],Object(i["p"])(t).then((function(t){var a=t.data;e.formValidate={is_hot:a.is_hot,is_best:a.is_best,is_new:a.is_new,is_benefit:a.is_benefit,ficti:a.ficti,content:a.content,store_name:a.store_name},1===a.is_benefit&&e.checkboxGroup.push("is_benefit"),1===a.is_hot&&e.checkboxGroup.push("is_hot"),1===a.is_best&&e.checkboxGroup.push("is_best"),1===a.is_new&&e.checkboxGroup.push("is_new"),e.fullscreenLoading=!1,console.log(e.formValidate)})).catch((function(t){e.$message.error(t.message),e.fullscreenLoading=!1}))},onEdit:function(t){this.productId=t,this.getInfo(t),this.dialogVisible=!0},toVirtualSales:function(t){var e=this;this.$modalForm(Object(i["K"])(t)).then((function(){return e.getList("")}))},handleSubmit:function(t){var e=this;console.log(this.formValidate),this.$refs[t].validate((function(t){if(!t)return!1;Object(i["t"])(e.productId,e.formValidate).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.fullscreenLoading=!1,e.$message.success(a.message),e.dialogVisible=!1,e.getList();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch((function(t){e.fullscreenLoading=!1,e.$message.error(t.message)}))}))},onChangeGroup:function(){this.checkboxGroup.includes("is_benefit")?this.formValidate.is_benefit=1:this.formValidate.is_benefit=0,this.checkboxGroup.includes("is_best")?this.formValidate.is_best=1:this.formValidate.is_best=0,this.checkboxGroup.includes("is_new")?this.formValidate.is_new=1:this.formValidate.is_new=0,this.checkboxGroup.includes("is_hot")?this.formValidate.is_hot=1:this.formValidate.is_hot=0},handleClose:function(){this.dialogVisible=!1},batchOff:function(){if(0===this.multipleSelection.length)return this.$message.warning("请先选择商品");this.toOff(this.OffId)},toOff:function(t){var e=this;this.$prompt("强制下架",{confirmButtonText:"确定",cancelButtonText:"取消",inputErrorMessage:"请输入强制下架原因",inputType:"textarea",inputPlaceholder:"请输入强制下架原因",inputValidator:function(t){if(!t)return"请输入强制下架原因"}}).then((function(a){var n=a.value;Object(i["r"])({id:t,status:-2,refusal:n}).then((function(t){e.$message({type:"success",message:"提交成功"}),e.getLstFilterApi(),e.getList()})).catch((function(t){e.$message.error(t.message)}))})).catch((function(){e.$message({type:"info",message:"取消输入"})}))},getLstFilterApi:function(){var t=this;Object(i["n"])().then((function(e){t.headeNum=e.data})).catch((function(e){t.$message.error(e.message)}))},getMerSelect:function(){var t=this;Object(i["o"])().then((function(e){t.merSelect=e.data})).catch((function(e){t.$message.error(e.message)}))},batch:function(){if(0===this.multipleSelection.length)return this.$message.warning("请先选择商品");this.$refs.infoFrom.dialogVisible=!0,this.isShow=!1},handleSelectionChange:function(t){this.multipleSelection=t;var e=[];this.multipleSelection.map((function(t){e.push(t.product_id)})),this.OffId=e},toExamine:function(t){this.$refs.infoFrom.dialogVisible=!0,this.isShow=!0,this.$refs.infoFrom.getInfo(t)},getCategorySelect:function(){var t=this;Object(i["k"])().then((function(e){t.merCateList=e.data})).catch((function(e){t.$message.error(e.message)}))},getList:function(t){var e=this;this.listLoading=!0,this.tableFrom.page=t||this.tableFrom.page,Object(i["q"])(this.tableFrom).then((function(t){e.tableData.data=t.data.list,e.tableData.total=t.data.count,e.listLoading=!1})).catch((function(t){e.listLoading=!1,e.$message.error(t.message)}))},pageChange:function(t){this.tableFrom.page=t,this.getList()},handleSizeChange:function(t){this.tableFrom.limit=t,this.getList()}}},m=d,p=(a("498c"),a("2877")),f=Object(p["a"])(m,n,r,!1,null,"767e1f79",null);e["default"]=f.exports}}]);