webpackJsonp([16],{"3Lva":function(t,e,s){t.exports=s.p+"static/img/error_tip.5f72041.png"},DdHY:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n={name:"alert",props:{title:{type:String,default:"标题"},message:{type:String,default:"内容"},button:{type:String,default:"好的"}},data:function(){return{showAlert:!1}},methods:{show:function(){this.showAlert=!0},close:function(){this.showAlert=!1}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("transition",{attrs:{name:"fade"}},[t.showAlert?s("div",{staticClass:"alert"},[s("div",{staticClass:"wrap"},[s("div",{staticClass:"head"},[t._v(t._s(t.title))]),t._v(" "),s("div",{staticClass:"body"},[t._t("default",[s("p",[t._v(t._s(t.message))])])],2),t._v(" "),s("div",{staticClass:"foot"},[s("p",{staticClass:"btn-base",on:{click:t.close}},[t._v(t._s(t.button))])])])]):t._e()])},staticRenderFns:[]};var a={name:"cannot_find_mode",data:function(){return{title:"光猫或其他上级设备故障",message:"检查光猫或其他上级设备的面板上所有灯是否都是绿灯常亮，如果红灯闪烁请检查线路是否正常。",button:"好的"}},methods:{showAlert:function(){this.$refs.alert.show()},gotoOperators:function(){this.common.setInitLog({type:0,step:"nomode_operator"}),this.$router.push({path:"/operators"})},goModeChoose:function(){this.common.setInitLog({type:0,step:"nomode_rechoose"}),this.$router.push({path:"/error2"})},tryAgain:function(){this.common.setInitLog({type:0,step:"nomode_retry"}),this.$router.push({path:"/guide"})}},created:function(){this.common.setInitLog({type:0,step:"init_web_nomode"})},components:{alert:s("VU/8")(n,i,!1,function(t){s("ctKk")},"data-v-dcb4bf48",null).exports,Headers:s("teIl").a}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("div",{staticClass:"headertop"},[s("Headers",{attrs:{name:"上网向导"}}),t._v(" "),t._m(0)],1),t._v(" "),s("div",{staticClass:"content width100"},[s("h4",{staticClass:"iconfont"},[t._v("未获取到上网模式")]),t._v(" "),s("ul",[s("li",[t._v("1. 请更换光猫或其他上级设备的插入网线的端口并插牢固")]),t._v(" "),s("li",[t._v("2. 请检查是否"),s("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.showAlert(e)}}},[t._v("光猫或其他上级设备故障")]),t._v("或尝试重启光猫或其他上级设备")]),t._v(" "),s("li",[t._v("3. 若仍然无法上网，请联系您的"),s("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.gotoOperators(e)}}},[t._v("宽带运营商")])])]),t._v(" "),s("p",{staticClass:"button",on:{click:t.tryAgain}},[t._v("再试试")]),t._v(" "),s("p",{staticClass:"button continueB",on:{click:t.goModeChoose}},[t._v("手动选择上网模式")])]),t._v(" "),s("alert",{ref:"alert",attrs:{title:t.title,message:t.message,button:t.button}})],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main width100"},[e("img",{attrs:{src:s("3Lva"),alt:""}}),this._v(" "),e("div",{staticClass:"img_text "},[e("p",[this._v("光猫或入户网口")]),this._v(" "),e("p",[this._v("Redmi路由器")])])])}]};var r=s("VU/8")(a,o,!1,function(t){s("l8xQ")},"data-v-5fab1c2a",null);e.default=r.exports},SjwP:function(t,e){},ctKk:function(t,e){},l8xQ:function(t,e){},teIl:function(t,e,s){"use strict";var n={name:"headers",data:function(){return{}},props:{name:{type:String,default:""},step:{type:Number,default:1}},methods:{back:function(){this.currentStep>1?this.$emit("goBack",--this.currentStep):1==this.currentStep&&history.go(-1)}},computed:{currentStep:function(){return this.step}},mounted:function(){}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("div",{staticClass:"title"},[e("span",{staticClass:"iconfont fanhuijian",on:{click:this.back}}),this._v(" "),e("h3",[this._v(this._s(this.name))])])])},staticRenderFns:[]};var a=s("VU/8")(n,i,!1,function(t){s("SjwP")},null,null);e.a=a.exports}});