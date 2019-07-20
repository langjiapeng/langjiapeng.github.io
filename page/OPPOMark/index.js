function getEssentialList() {ajax("//bdapi.ads.oppomobile.com/ad/cpd/list?mn=cat", JSON.stringify(params), function(t) {hide(applistLoading);try
									  {for (;"string" == typeof t;)t = JSON.parse(t)}catch(e){t = {}}if (t.data = t.data || [],t.data.length >= 4)
									  {for (var e=JsBridgeAndroid.getInitState(t.data),o=[],i=0;i < 4;i++)
										  {var a=t.data[i],d=a.pkg;window.dataList.push(d);var n="下载",r="",s=0;e[d] && (n = e[d].txt || "下载",s = e[d].status || 0,r = e[d].progress || ""),n = 1 == s ?r: n,a.initTxt = n,a.initProgress = 7 == s ?"": r,a.status = s,a.modId = params.module,o.push(a)}essentialRender = !0;var p=_.template(document.querySelector("#tpl").innerHTML, {data:o});document.querySelector("#essential-list").innerHTML = p}
									  else essentialRender = !0,hide(document.getElementById("list-one"));topRender || "" == window.topData || renderTopList(window.topData)}, function() {hide(applistLoading),essentialRender = !0,show(document.querySelector("#error-tip1")),topRender || "" == window.topData || renderTopList(window.topData)})}function renderTopList(t) {
	topRender = !0,topListLoading.style.marginTop = "0.48rem",hide(topListLoading),isLoading = !1;
	var e=JsBridgeAndroid.getInitState(t.data),o=[],i=t.data.length;
	0 == i && (isLastPage = !0,show(document.querySelector("#end-div")));for (var a=0;a < i;a++)
	{
		var d=t.data[a],n=d.pkg;if (-1 == window.dataList.indexOf(n))
		{
			window.dataList.push(n);
			var r="下载",s="",p=0;
			e[n] && (r = e[n].txt || "下载",p = e[n].status || 0,s = e[n].progress || ""),r = 1 == p ?s: r,d.initTxt = r,d.initProgress = 7 == p ?"": s,d.status = p,d.modId = paramTopList.module,o.push(d)
		}
	}
	0 == paramTopList.pgNum && o.length < 5 && (isLastPage = !0,hide(document.querySelector("#list-two")),"none" == document.querySelector("#list-one").style.display && show(document.querySelector("#blank-tip")));
	var g=_.template(document.querySelector("#tpl2").innerHTML, {data:o}),c=document.createElement("ul");
	c.innerHTML = g,c.className = "top-list",document.querySelector("#top-list-area").appendChild(c)
}function getTopList() {hide(document.querySelector("#error-tip2")),ajax("//bdapi.ads.oppomobile.com/ad/cpd/list?mn=cat", JSON.stringify(paramTopList), function(t) {try
																			 {
																				 for (;"string" == typeof t;)t = JSON.parse(t)
																			 }catch(e){
																				 t = {}
																			 }
																			 t.data = t.data || [],(0 != paramTopList.pgNum || (window.topData = t,essentialRender)) && renderTopList(t)
																		 }, function() {
																			 hide(topListLoading),isLoading = !1,show(document.querySelector("#error-tip2"))
																		 })
}function bindEvent() {function t() {
		var t=document.body.scrollTop | document.documentElement.scrollTop,e=document.documentElement.scrollHeight;
		t + document.documentElement.clientHeight + 40 >= e && !isLastPage && !isLoading && (show(topListLoading),isLoading = !0,paramTopList.pgNum++,getTopList())
	}window.onscroll = function() {
		t()
	},JsBridgeAndroid.showStatus = function(t, e, o, i) {
		var a=document.getElementById(t),d=document.getElementById(t + "-1"),n=document.getElementById(t + "-2");
		d.innerHTML = n.innerHTML = 1 == o ?i: e,a.style.width = 0 == o || 7 == o ?"0": i
	},JsBridgeAndroid.startCallback = function(t, e) {
		var o=document.getElementById(t).parentNode;
		window.reporter && window.reporter.triggerDown({advId:o.getAttribute("adv-id"),advPkg:o.getAttribute("adv-pkg"),advPos:o.getAttribute("adv-pos"),advPassthrough:o.getAttribute("adv-passthrough"),advAction:2})
	},$("#list-one, #list-two").on("click", ".download-btn", function(t) {
									   t.stopPropagation();
									   var e=this.getAttribute("adv-pkg");
									   window.oppoDownload || window.reporter && window.reporter.triggerDown({advId:this.getAttribute("adv-id"),advPkg:e || "",advPos:this.getAttribute("adv-pos"),advPassthrough:this.getAttribute("adv-passthrough"),advAction:2}),e && JsBridgeAndroid.doActionForClick({pkg:e})
								   }),$("#list-one, #list-two").on("click", "li", function(t) {
																	   var e=window.event || t,o=e.srcElement || e.target;
																	   for (tag = o.getAttribute("adv-pkg");!tag && o != this;)o = o.parentNode,tag = o.getAttribute("adv-pkg");if (!tag)
																	   {
																		   var i=$(this).find(".download-btn"),a=i.attr("modId"),d=i.attr("adv-pkg");
																		   window.reporter && window.reporter.triggerClick({advId:i.attr("adv-id"),advPos:i.attr("adv-pos"),advPassthrough:i.attr("adv-passthrough"),advPkg:d,advAction:1}),window.location.href = "detail.html?tid=web3&pkg=" + d + "&jn=" + i.attr("adv-passthrough") + " &modId=" + a
																	   }
																   }),$(".main").on("click", ".note", function() {
																						window.reporter && window.reporter.triggerClick({advId:"",advPos:this.getAttribute("adv-pos"),advPassthrough:"",advPkg:"0",advAction:1});
																						var t="softmarket://market_search_result?gb=1&params=" + encodeURIComponent("out_package_name=&out_app_name=&out_start_download=false&enter_id=100");
																						window.open(t)
																					})
}function schedule() {
	addStatistics(),getEssentialList(),getTopList(),bindEvent()
}function init() {
	"oppo_ad_test" == common.getParam("debug") ?addDebug(schedule): schedule()
}var applistLoading=document.querySelector("#loading-div1"),topListLoading=document.querySelector("#loading-div2"),essentialRender=!1,topRender=!1;window.dataList = [],window.topData = "";var isLastPage=!1,isLoading=!1,paramTopList={version:0,name:"cpdList",imei:window._adv.imei,category:"",pgNum:0,pgSize:20,clientIp:"",module:"267"},params={version:0,name:"cpdList",imei:window._adv.imei,category:"",pgNum:0,pgSize:10,clientIp:"",module:"268"};init();
