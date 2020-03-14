(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunk-2a49ab84"],{"4c53":function(t, i, n) {"use strict";var e=n("23e7"),o=n("857a"),r=n("af03");e({target:"String",proto:!0,forced:r("sub")}, {sub:function() {return o(this, "sub", "", "")}})},"6f1c":function(t, i, n) {"use strict";var e=n("f466"),o=n.n(e);o.a},"857a":function(t, i, n) {var e=n("1d80"),o=/"/g;t.exports = function(t, i, n, r) {var s=String(e(t)),a="<" + i;return"" !== n && (a += " " + n + '="' + String(r).replace(o, "&quot;") + '"'),a + ">" + s + "</" + i + ">"}},a55b:function(t, i, n) {"use strict";n.r(i);var e=function() {var t=this,i=t.$createElement,n=t._self._c || i;return n("div", {staticClass:"app"}, [t.loaded ?[t.building ?[t._m(0)]: t._e(),t.building ?t._e(): [n("div", {staticClass:"reg-bg"}),t._m(1),n("div", {staticClass:"reg"}, [n("van-field", {attrs:{clearable:"","left-icon":"user-o",placeholder:"请输入姓名"},model:{value:t.regForm.realName,callback:function(i) {t.$set(t.regForm, "realName", i)},expression:"regForm.realName"}}),n("van-field", {attrs:{clearable:"","left-icon":"idcard",maxlength:"30",placeholder:"请输入身份证号"},model:{value:t.regForm.idnum,callback:function(i) {
																																																																																																																																																																																																																																																																					t.$set(t.regForm, "idnum", i)
																																																																																																																																																																																																																																																																				},expression:"regForm.idnum"}}),n("van-button", {staticClass:"reg-btn",attrs:{type:"info"},on:{click:t.login}}, [t._v("查 询")])], 1),n("van-button", {staticClass:"reg-obtn",attrs:{type:"info",plain:""},on:{click:function(i) {
																																																																																																																																																																																																																																																																																																								  return t.toAdd({})
																																																																																																																																																																																																																																																																																																							  }}}, [t._v("健康情况登记")])]]: t._e()], 2)
																		 },o=[function() {
																				 var t=this,i=t.$createElement,e=t._self._c || i;
																				 return e("div", {staticClass:"building"}, [e("img", {attrs:{src:n("d994")}}),e("p", [t._v("网站于23时至5时期间维护")])])
																			 },function() {
																				 var t=this,i=t.$createElement,n=t._self._c || i;
																				 return n("div", {staticClass:"reg-title"}, [n("p", [t._v("台州市教育系统师生员工")]),n("p", [t._v("健康情况登记")])])
																			 }],r=(n("4c53"),{name:"login",components:{},data:function() {
																				 return{loaded:!1,buildTimer:null,building:!1,regForm:{realName:"",idnum:""},formFlag:!0}
																			 },mounted:function() {
																				 var t=this;this.$axios.get("http://quan.suning.com/getSysTime.do").then((function(i) {
																																							 console.log(i.sysTime2),t.loaded = !0;
																																							 var n=i.sysTime2.substring(11, 13);
																																							 n >= 23 || n < 5 ?t.building = !0: (t.building = !1,t.visit())
																																						 })),this.buildTimer = setInterval((function() {
																																															   t.checkTime()
																																														   }), 1e3)
																			 },beforeDestroy:function() {
																				 this.buildTimer && clearInterval(this.buildTimer)
																			 },methods:{checkTime:function() {
																					 var t=this;this.$axios.get("http://quan.suning.com/getSysTime.do").then((function(i) {
																																								 var n=i.sysTime2.substring(11, 13);
																																								 t.building = n >= 23 || n < 5
																																							 }))
																				 },visit:function() {this.$axios.post("pub/log/visit", {type:0}).then((function(t) {
																																						  console.log("登录页访问")
																																					  }))
																				 },toAdd:function(t) {
																					 this.$router.push({path:"/item",query:t})
																				 },login:function() {
																					 return this.$util.checkNull(this.regForm.realName) ?this.$util.checkNull(this.regForm.idnum) ?void this.sub(): (this.$notify("请输入身份证号!"),!1): (this.$notify("请输入姓名!"),!1)
																				 },sub:function() {
																					 var t=this;
																					 if (!this.formFlag)return this.$notify("请勿重复点击"),!1;this.formFlag = !1,this.$toast.loading({duration:0,message:"查询中...",forbidClick:!0}),this.$axios.post("/pub/stu/infoByOption", this.regForm).then((function(i) {
																																																																							   t.$toast.clear(),0 == i.code || 503 == i.code ?t.toAdd(t.regForm): 501 == i.code ?(t.formFlag = !0,t.$notify("没有查询到您的健康情况登记数据")): (t.formFlag = !0,t.$notify("当前人数较多，请稍后再试"))
																																																																						   }), (function(i) {
																																																																							   t.$toast.clear(),t.formFlag = !0
																																																																						   }))
																				 }}}),s=r,a=(n("6f1c"),n("b95e"),n("2877")),u=Object(a["a"])(s, e, o, !1, null, "2b7a56fa", null);
																		 i["default"] = u.exports
																	 },af03:function(t, i, n) {
																		 var e=n("d039");t.exports = function(t) {return e((function() {
																															   var i=""[t]('"');
																															   return i !== i.toLowerCase() || i.split('"').length > 3
																														   }))
																		 }
																	 },b95e:function(t, i, n) {
																		 "use strict";
																		 var e=n("f424"),o=n.n(e);
																		 o.a
																	 },d994:function(t, i, n) {
																		 t.exports = n.p + "img/building.3ff070ad.png"
																	 },f424:function(t, i, n) {
																	 },f466:function(t, i, n) {
																	 }}]);
