if(typeof Array.prototype.indexOf!="function"){Array.prototype.indexOf=function(c,d){var b=-1;d=d*1||0;for(var a=0,e=this.length;a<e;a++){if(a>=d&&this[a]===c){b=a;break}}return b}}if(!String.prototype.trim){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}}var DOMUtil={getStyle:function(b,a){return b.currentStyle?b.currentStyle[a]:getComputedStyle(b,0)[a]},getScroll:function(){var a={};if(window.pageYOffset||window.pageXOffset){a.top=window.pageYOffset;a.left=window.pageXOffset}else{if(document.compatMode&&document.compatMode!="BackCompat"){a.top=document.documentElement.scrollTop;a.left=document.documentElement.scrollLeft}else{if(document.body){a.top=document.body.scrollTop;a.left=document.body.scrollLeft}}}return a},getClient:function(){var b,c,a,d;b=document.documentElement.scrollLeft||document.body.scrollLeft;c=document.documentElement.scrollTop||document.body.scrollTop;a=document.documentElement.clientWidth;d=document.documentElement.clientHeight;return{left:b,top:c,width:a,height:d}},getNextElement:function(b){if(b.nextElementSibling){return b.nextElementSibling}else{var a=b.nextSibling;while(a.nodeValue!=null){a=a.nextSibling}return a}},getElementById:function(a){return document.getElementById(a)},getElementsByClassName:function(k,c,d){if(typeof c=="string"){d=c;c=document}else{c=c||document;d=d||"*"}if(c.getElementsByClassName){return c.getElementsByClassName(k)}var b=c.getElementsByTagName(d);var g=[];for(var h=0;h<b.length;h++){var e=b[h];var a=e.className.split(" ");for(var f=0;f<a.length;f++){if(a[f]==k){g.push(e);break}}}return g},addClass:function(a,b){if(!new RegExp("(^|s+)"+b).test(a.className)){a.className=(a.className+" "+b).replace(/^\s+|\s+$/g,"")}},removeClass:function(a,b){a.className=(a.className.replace(b,"")).replace(/^\s+|\s+$/g,"")}};