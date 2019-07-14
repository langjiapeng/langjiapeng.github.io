function change() {
    //个人信息
	document.getElementById('ZKZH').innerHTML = document.getElementById("ZKZHtext").value;
	document.getElementById('SFZH').innerHTML = document.getElementById("SFZHtext").value;
	document.getElementById('XM').innerHTML = document.getElementById("XMtext").value;
	document.getElementById('BMXH').innerHTML = document.getElementById("BMXHtext").value;

	//语文
	if (document.getElementById("YWXKtext").value == "")
	{
		document.getElementById("DIVYWXK").style.display = "none";
	}
	else
	{
		document.getElementById('YWXK').innerHTML = document.getElementById("YWXKtext").value;
	}

	//数学
	if (document.getElementById("SXXKtext").value == "")
	{
		document.getElementById("DIVSXXK").style.display = "none";
	}
	else
	{
		document.getElementById('SXXK').innerHTML = document.getElementById("SXXKtext").value;
	}

    //外语
	if (document.getElementById("YYXKtext").value == "")
	{
		document.getElementById("DIVYYXK").style.display = "none";
	}
	else
	{
		document.getElementById('YYXK').innerHTML = document.getElementById("YYXKtext").value;
	}

	//思想政治
	if (document.getElementById("SZXKtext").value == "")
	{
		document.getElementById("DIVSZXK").style.display = "none";
	}
	else
	{
		document.getElementById('SZXK').innerHTML = document.getElementById("SZXKtext").value;
	}

	//历史
	if (document.getElementById("LSXKtext").value == "")
	{
		document.getElementById("DIVLSXK").style.display = "none";
	}
	else
	{
		document.getElementById('LSXK').innerHTML = document.getElementById("LSXKtext").value;
	}

	//地理
	if (document.getElementById("DLXKtext").value == "")
	{
		document.getElementById("DIVDLXK").style.display = "none";
	}
	else
	{
		document.getElementById('DLXK').innerHTML = document.getElementById("DLXKtext").value;
	}

	//物理
	if (document.getElementById("WLXKtext").value == "")
	{
		document.getElementById("DIVWLXK").style.display = "none";
	}
	else
	{
		document.getElementById('WLXK').innerHTML = document.getElementById("WLXKtext").value;
	}

	//化学
	if (document.getElementById("HXXKtext").value == "")
	{
		document.getElementById("DIVHXXK").style.display = "none";
	}
	else
	{
		document.getElementById('HXXK').innerHTML = document.getElementById("WLXKtext").value;
	}

	//生物
	if (document.getElementById("SWXKtext").value == "")
	{
		document.getElementById("DIVSWXK").style.display = "none";
	}
	else
	{
		document.getElementById('SWXK').innerHTML = document.getElementById("SWXKtext").value;
	}

	//技术
	if (document.getElementById("JSXKtext").value == "")
	{
		document.getElementById("DIVJSXK").style.display = "none";
	}
	else
	{
		document.getElementById('JSXK').innerHTML = document.getElementById("JSXKtext").value;
	}

	//外语
	if (document.getElementById("WYXNtext").value == "")
	{
		document.getElementById("DIVWYXN").style.display = "none";
	}
	else
	{
		document.getElementById('WYXN').innerHTML = document.getElementById("WYXNtext").value;
	}

	//32位校验码
	function guid2() {
		function S4() {
			return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
		}
		return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
	}

	document.getElementById('JYM').innerHTML = guid2();

	//自定义消失
	document.getElementById("zdy").style.display = "none";
	document.getElementById("申明").style.display = "none";
}

//关闭按钮
function guanbi() {  
    document.getElementById('oImg').style.display = "block";  
	document.getElementById("all").style.display = "none";
	alert("This is a surprise!");
}

//通用
document.oncontextmenu = function () { 
	event.returnValue = false; 
};
window.onhelp = function () { 
	return false; 
};
document.onkeydown = function () {
	if ((window.event.altKey) && ((window.event.keyCode == 37) || (window.event.keyCode == 39)))
	{ 
		alert("不准你使用ALT+方向键前进或后退网页！"); event.returnValue = false; 
	}
	if ((event.keyCode == 8) || (event.keyCode == 116) || (event.ctrlKey && event.keyCode == 82))
	{ 
		event.keyCode = 0; event.returnValue = false; 
	}
	if (event.keyCode == 122)
	{ 
		event.keyCode = 0; event.returnValue = false; 
	}
	if (event.ctrlKey && event.keyCode == 78) event.returnValue = false;
	if (event.shiftKey && event.keyCode == 121) event.returnValue = false;
	if (window.event.srcElement.tagName == "A" && window.event.shiftKey) window.event.returnValue = false;
};    
