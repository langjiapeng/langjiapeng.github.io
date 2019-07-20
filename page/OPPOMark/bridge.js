function formatJson(e, o) {var t=/\W/.test(e) ?new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');"): _formatJson_cache[e] = _formatJson_cache[e] || formatJson(document.getElementById(e).innerHTML);return o ?t(o): t}function pageAdaption(e) {function o(e) {var o=document.documentElement.clientWidth;o > e && (o = e),document.documentElement.style.fontSize = o / e * 100 + "px"}var t=null;e = e || 1080,window.addEventListener("resize", function() {t && clearInterval(t),t = setTimeout(o, 30)}, !1),window.addEventListener("pageshow", function(e) {e.persisted && (t && clearTimeout(t),t = setTimeout(o, 30))}, !1),setTimeout(function() {var e=document.getElementById("pop");e && e.parentNode.removeChild(e)}, 0),o(e)}function addStatistics() {
	var e=document.createElement("script");
	e.src = "//data.ads.oppomobile.com/h5/statistics-v2.js?v=20180605",document.body.appendChild(e)
}function addDebug(e) {
	var o=document.createElement("script");o.src = "//data.ads.oppomobile.com/h5/debug.min.js?v=20171218",document.body.appendChild(o),o.onload = function() {
		window.eruda.init(),e && e()
	}
}function ajax(e, o, t, n) {
	var a=null,r=new XMLHttpRequest;r.open("post", e, !0),r.setRequestHeader("Content-Type", "application/json"),a = setTimeout(function() {
																																	r.abort(),n && n("timeout")
																																}, 3e3),r.onreadystatechange = function() {if (4 == r.readyState || "complete" == r.readyState)
		{
			a && window.clearTimeout(a);
			var e=r.responseText;
			200 == r.status ?t && t(e): n && n(e)
		}
	},r.send(o)
}function timeStamp2String(e) {
	var o=new Date;
	return o.setTime(1e3 * e),o.getFullYear() + "-" + (o.getMonth() + 1) + "-" + o.getDate()
}function show(e) {
	e && (e.style.display = "block")
}function hide(e) {
	e && (e.style.display = "none")
}var _formatJson_cache={};!function() {
	var e={};window.oppoDownload && (oppoDownload.sync = function(o, t, n) {
		var a=null;try
		{
			a = JSON.parse(o)
		}catch(e){
			a = {}
		}
		var r=a.pkg || "";switch (n = (1 * (n || 0)).toFixed(1) + "%",parseInt(t, 10))
		{
			case 0:
				e[r] = 0,JsBridgeAndroid.showStatus(r, "下载", 0, n);
				break;
			case 8:
			case 1:
				e[r] = 1,JsBridgeAndroid.showStatus(r, "暂停", 1, n);
				break;
			case 9:
				JsBridgeAndroid.startCallback(r, 9),JsBridgeAndroid.showStatus(r, "暂停", 1, n);
				break;
			case 2:
				JsBridgeAndroid.showStatus(r, "继续", 2, n);
				break;
			case 3:
				JsBridgeAndroid.showStatus(r, "暂停", 3, n);
				break;
			case 4:
				n = "100%",e[r] = 4,JsBridgeAndroid.showStatus(r, "安装", 4, n);
				break;
			case 5:
				e[r] = 0,JsBridgeAndroid.showStatus(r, "下载", 5, n);
				break;
			case 6:
				n = "100%",e[r] = 6,JsBridgeAndroid.showStatus(r, "安装中", 6, n);
				break;
			case 7:
				n = "100%",e[r] = 7,JsBridgeAndroid.showStatus(r, "打开", 7, n)
		}
	}),window.JsBridgeAndroid = {download:function(e) {
			oppoDownload && oppoDownload.download(e)
		},paused:function(e) {
			oppoDownload && oppoDownload.onSync(e, 2)
		},resumed:function(e) {
			oppoDownload && oppoDownload.onSync(e, 3)
		},installing:function(e) {
			oppoDownload && oppoDownload.onSync(e, 6)
		},open:function(e) {
			oppoDownload && oppoDownload.onSync(e, 7)
		},doActionForClick:function(o) {
			var t=null,n=o.pkg,a=o.url,r=o.deeplink;if (n)if (window.oppoDownload)
				{try
					{
						t = JSON.stringify(o)
					}catch(e){
						t = ""
					}switch (e[n] || 0)
					{
						case 0:
						case 8:
							a ?this.download(t): oppoDownload.supportMarkDownload() ?this.download(t): window.location.href = "softmarket://market_appdetail?pn=com.oppo.market&gb=1&params=enter_id%3d6%26enter_params%3dout_operator%2301-01%26out_package_name%3d" + n + "%26out_start_download%3dtrue",e[n] = 8;
							break;
						case 1:
							this.paused(t),e[n] = 2;
							break;
						case 2:
							this.resumed(t),e[n] = 3;
							break;
						case 3:
							this.paused(t),e[n] = 2;
							break;
						case 4:
							this.installing(t);
							break;
						case 7:
							r ?this.openDeepLink(r): this.open(t)
					}
				}
				else a || (window.location.href = "softmarket://market_appdetail?pn=com.oppo.market&gb=1&params=enter_id%3d6%26enter_params%3dout_operator%2301-01%26out_package_name%3d" + n + "%26out_start_download%3dtrue")
		},getInitState:function(o) {
			var t=[],n={};
			if (!window.oppoDownload)return n;
			"[object Array]" !== Object.prototype.toString.call(o) && (o = [o]);
			for (a = 0;a < o.length;++a)o[a].pkg && t.push(o[a]);try
			{
				t = JSON.parse(oppoDownload.queryDownloadState(JSON.stringify(t)))
			}catch(e){
				t = []
			}for (var a=0;a < t.length;++a)
			{
				var r=t[a] || {},s=r.pkg;if (s)switch (n[s] = {},r.progress && (n[s].progress = (1 * r.progress).toFixed(1) + "%"),parseInt(r.status, 10))
					{
						case 0:
							e[s] = 0,n[s].status = 0,n[s].txt = "下载";
							break;
						case 1:
							e[s] = 1,n[s].status = 1,n[s].txt = "暂停";
							break;
						case 2:
							e[s] = 2,n[s].status = 2,n[s].txt = "继续";
							break;
						case 3:
							e[s] = 3,n[s].status = 3,n[s].txt = "暂停";
							break;
						case 4:
							e[s] = 4,n[s].status = 4,n[s].txt = "安装";
							break;
						case 5:
							e[s] = 0,n[s].status = 0,instateMap[s].txt = "下载";
							break;
						case 6:
							e[s] = 6,n[s].status = 6,n[s].txt = "安装中";
							break;
						case 7:
							e[s] = 7,n[s].status = 7,n[s].txt = "打开";
							break;
						default:
							e[s] = 0,n[s].status = 0,n[s].txt = "下载"
					}
			}
			return n
		},openDeepLink:function(e) {
			var o=document.createElement("iframe");o.src = e,o.style.display = "none",document.body.appendChild(o),window.setTimeout(function() {
																																		 document.body.removeChild(o)
																																	 }, 300)
		},showStatus:function(e, o, t, n) {
		},startCallback:function(e, o) {
		}}
}();var common={getParam:function(e, o) {
		var t=arguments[1] || window.location.search,n=new RegExp("(^|&)" + e + "=([^&]*)(&|$)"),a=t.substr(t.indexOf("?") + 1).match(n);
		return null != a ?a[2]: ""
	},getNetType:function() {try
		{
			return navigator.connection.type
		}catch(e){
			return""
		}
	},getAndVer:function() {
		var e=navigator.userAgent.toLowerCase().match(/android\s([0-9\.]*)/);
		return e ?e[1]: ""
	},getAppVer:function() {
		var e=navigator.userAgent;
		return"-1" != e.indexOf("OppoBrowser/") ?e.substr(e.indexOf("OppoBrowser/") + 12): ""
	},checkWebpSupport:function() {
		var e=document.createElement("canvas");
		return!!Boolean(e.getContext && e.getContext("2d")) && 0 === e.toDataURL("image/webp").indexOf("data:image/webp")
	},addDebug:function(e) {
		var o=document.createElement("script");o.src = "https://data.ads.oppomobile.com/h5/debug.min.js?v=20171110",document.body.appendChild(o),o.onload = function() {
			eruda && eruda.init(),e && e()
		}
	},addScript:function() {
		var e=document.createElement("script");
		e.src = "https://data.ads.oppomobile.com/h5/statistics-v2.js?v=20180428",document.body.appendChild(e)
	}};if (window._adv = {parModuleId:403,platform:"cpd-app",imei:common.getParam("im") || "",ssoid:"",model:"",osVersion:"",romVersion:"",androidVersion:common.getAndVer(),sdkVersion:"",appVersion:common.getAppVer(),networkId:common.getNetType(),parPosId:"30_59_60_61",posSrc:"2000"},window.OppoWebPage && window.OppoWebPage.getBrowserInfo)try
	{
		var info=JSON.parse(window.OppoWebPage.getBrowserInfo());
		_adv.imei = info.imei,_adv.model = info.mobileName,_adv.osVersion = info.colorOsVersion,_adv.romVersion = info.mobileRomVersion,_adv.androidVersion = info.androidReleaseVersion,_adv.appVersion = info.browserVersion,_adv.networkId = info.networkType
	}catch(e){
	}
