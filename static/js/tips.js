$(document).on('copy',function(){
    showMessage('你都复制了些什么呀，转载要记得加上出处哦',8000);
});
$('.waifu-tool .fa-home').click(function(){
    try{if(typeof(ajax)==="function") ajax(window.location.protocol+'//'+window.location.hostname+'/',"pagelink"); else window.location = window.location.protocol+'//'+window.location.hostname+'/';}catch(e){}
});
function showMessage(a,b){
    if(b==null) b = 10000;
    jQuery(".waifu-tips").hide().stop();
    jQuery(".waifu-tips").html(a);
    jQuery(".waifu-tips").fadeTo("10",1);
    jQuery(".waifu-tips").fadeOut(b);
}
(function(){
    var text;
    var SiteIndexUrl = window.location.protocol+'//'+window.location.hostname+'/';
    if(window.location.href == SiteIndexUrl){
        var now = (new Date()).getHours();
        if(now>23||now<=5){
            text = '你是夜猫子呀？这么晚还不睡觉，明天起的来嘛';
        }else if(now>5&&now<=7){
            text = '早上好！一日之计在于晨，美好的一天就要开始了';
        }else if(now>7&&now<=11){
            text = '上午好！工作顺利嘛，不要久坐，多起来走动走动哦！';
        }else if(now>11&&now<=14){
            text = '中午了，工作了一个上午，现在是午餐时间！';
        }else if(now>14&&now<=17){
            text = '午后很容易犯困呢，今天的运动目标完成了吗？';
        }else if(now>17&&now<=19){
            text = '傍晚了！窗外夕阳的景色很美丽呢，最美不过夕阳红~';
        }else if(now>19&&now<=21){
            text = '晚上好，今天过得怎么样？';
        }else if(now>21&&now<=23){
            text = '已经这么晚了呀，早点休息吧，晚安~';
        }else{
            text = '嗨~ 快来逗我玩吧！';
        }
    }else{
        if (document.referrer !== '')
		{
            var referrer = document.createElement('a');
            referrer.href = document.referrer;
            var domain = referrer.hostname.split('.')[1];
            if (window.location.hostname == referrer.hostname)
			{
                text = '欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
            }
			else if (domain == 'baidu')
			{
                text = 'Hello! 来自 百度搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&wd=')[1].split('&')[0] + '</span> 找到的我吗？';
            }
			else if (domain == 'so')
			{
                text = 'Hello! 来自 360搜索 的朋友<br>你是搜索 <span style="color:#0099cc;">' + referrer.search.split('&q=')[1].split('&')[0] + '</span> 找到的我吗？';
            }
			else if (domain == 'google')
			{
                text = 'Hello! 来自 谷歌搜索 的朋友<br>欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
            }
			else
			{
                text = 'Hello! 来自 <span style="color:#0099cc;">' + referrer.hostname + '</span> 的朋友';
            }
        }
		else
		{
            text = '欢迎阅读<span style="color:#0099cc;">『' + document.title.split(' - ')[0] + '』</span>';
        }
    }
    $(".waifu").animate({top:$(window).height()-250},800);
    showMessage(text,8000);
})();
$(window).resize(function(){
    $(".waifu").css('top',window.innerHeight-250);
});
jQuery(document).ready(function($){
    window.setInterval(function(){showMessage(showHitokoto());},25000);
    var stat_click = 0;
    $("#live2d").click(function(){
        if(!ismove){
            stat_click++;
            if(stat_click>6) {
                msgs = ["你有完没完呀？","你已经摸我"+stat_click+"次了","非礼呀！救命！","OH，My ladygaga","110吗，这里有个变态一直在摸我(ó﹏ò｡)"];
                var i = Math.floor(Math.random()*msgs.length);
            }else{
                msgs = ["是…是不小心碰到了吧","我跑呀跑呀跑！~~","再摸的话我可要报警了！⌇●﹏●⌇","别摸我，有什么好摸的！","惹不起你，我还躲不起你么？","不要摸我了，我会告诉老婆来打你的！","干嘛动我呀！小心我咬你！"];
                var i = Math.floor(Math.random()*msgs.length);
            }
        s = [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.75,-0.1,-0.2,-0.3,-0.4,-0.5,-0.6,-0.7,-0.75];
        var i1 = Math.floor(Math.random()*s.length);
        var i2 = Math.floor(Math.random()*s.length);
            $(".waifu").animate({
            left:(document.body.offsetWidth-210)/2*(1+s[i1]),
            top:(window.innerHeight-240)-(window.innerHeight-240)/2*(1-s[i2])
            },
            {
                duration:500,
                complete:showMessage(msgs[i])
            });
        }else{
            ismove = false;
        }
    });
});
var ismove = false;
jQuery(document).ready(function($){
    var box=$('.waifu')[0];
    var topCount = 20;
    box.onmousedown=function(e){
        var Ox=e.offsetX;   
        var Oy=e.offsetY;
        var Ch=document.documentElement.clientHeight;
        var Cw=document.documentElement.clientWidth;
        document.onmousemove=function(e){
            var Cx=e.clientX;
            var Cy=e.clientY;
            box.style.left=Cx-Ox+"px";
            box.style.top=Cy-Oy+"px";
            if(box.offsetLeft<0){
                box.style.left=0;
            }
            else if(box.offsetLeft+box.offsetWidth>Cw){
                box.style.left=Cw-box.offsetWidth+"px";
            }
            if(box.offsetTop-topCount<0){
                box.style.top=topCount+"px";
            }
            else if(box.offsetTop+box.offsetHeight-topCount>Ch){
                box.style.top=Ch-(box.offsetHeight-topCount)+"px";
            }
            ismove = true;
        };
        document.onmouseup=function(e){
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
});



//functions
(function(){
    'use strict';
    var shareMenu = function(){
        $(document).on('click','.Share',function(){
            $('.share-wrap').fadeToggle('slow');
        });
    }
    var sidebaraffix = function(){
        if($('#sidebar').height()&&xb.site_sh){
            if($('#main').height()>$('#sidebar').height()){
                var footerHeight = 0;
                if($('#page-footer').length>0){
                    footerHeight = $('#page-footer').outerHeight(true);
                }
                $('#sidebar').affix({
                    offset:{
                        top:$('#sidebar').offset().top-xb.site_sh,
                        bottom:$('#footer').outerHeight(true)+footerHeight+6
                    }
                });
            }
        }
    }
    var toSearch = function(){
        $('.search-box').on('click',function(e){
            $('#searchform').animate({width:'200px'},200),
            $('#searchform input').css('display','block');
            $(document).one('click', function(){
                $('#searchform').animate({width:'0'},100),
                $('#searchform input').hide();
            });
            e.stopPropagation();
        });
        $('#searchform').on('click',function(e){e.stopPropagation();})
    }
    var showlove = function(){
        $.fn.postLike = function(){
            if($(this).hasClass('done')){
                layer.msg('您已经支持过了',function(){});
                return false;
            }else{
                $(this).addClass('done');
                layer.msg('感谢您的支持');
                var id = $(this).data('id'),
                    action = $(this).data('action'),
                    rateHolder = $(this).children('.count');
                var ajax_data = {
                    action:'love',
                    um_id:id,
                    um_action:action
                };
                $.post(xb.ajax_url,ajax_data,function(data){
                    $(rateHolder).html(data);
                });
                return false;
            }
        };
        $(document).on('click','.Love',function(){$(this).postLike();});
    }
    var gotop = function(){
        $('.gotop-box').on('click',function(event){
            event.preventDefault();
            $('html, body').animate({
                scrollTop:$('html').offset().top
            },500);
            return false;
        });
        $(window).scroll(function(){
            var $win = $(window);
            if ($win.scrollTop()>200){
                $('.gotop-box').addClass('active');
            }else{
                $('.gotop-box').removeClass('active');
            }
        });
    }
    var wechatpic = function(){
        $('#wechat-img').mouseout(function(){
            $('#wechat-pic')[0].style.display = 'none';
        })
        $('#wechat-img').mouseover(function(){
            $('#wechat-pic')[0].style.display = 'block';
        })
    }
    var showPhotos = function(){
        layer.photos({
          photos:'.kratos-post-content p,.kratos-status-post p',
          anim: 0
        });
    }
    var offcanvas = function(){
        var $clone = $('#kratos-menu-wrap').clone();
        $clone.attr({
            'id':'offcanvas-menu'
        });
        $clone.find('> ul').attr({
            'class':'ul-me',
            'id':''
        });
        $('#kratos-page').prepend($clone);
        $('.js-kratos-nav-toggle').on('click',function(){
            if($('.nav-toggle').hasClass('toon')){
                $('.nav-toggle').removeClass('toon');
                $('#offcanvas-menu').css('right','-240px');
            }else{
                $('.nav-toggle').addClass('toon');
                $('#offcanvas-menu').css('right','0px');
            }
        });
        $('#offcanvas-menu a').on('click',function(){
            $('.nav-toggle').removeClass('toon');
            $('#offcanvas-menu').css('right','-240px');
        });
        $('#offcanvas-menu').css('height',$(window).height());
        $('#offcanvas-menu').css('right','-240px');
        $(window).resize(function(){
            var w = $(window);
            $('#offcanvas-menu').css('height',w.height());
            if(w.width()>769){
                if($('.nav-toggle').hasClass('toon')){
                    $('.nav-toggle').removeClass('toon');
                    $('#offcanvas-menu').css('right','-240px');
                }
            }
        });
    }
    var menu = function(){
        $(document).click(function(e){
            var container = $('#offcanvas-menu,.js-kratos-nav-toggle');
            if(!container.is(e.target)&&container.has(e.target).length===0){
                if($('.nav-toggle').hasClass('toon')){
                    $('.nav-toggle').removeClass('toon');
                    $('#offcanvas-menu').css('right','-240px');
                }
            }
        });
        $('#kratos-header-section:not(.color-banner) ul>li').hover(function(){
            $(this).children('ul').slideDown(150)
        },function(){$(this).children('ul').stop(true,false).slideUp(200)});
    }
    var xControl = function(){
        $(document).on('click','.xHeading',function(event){
            var $this = $(this);
            $this.closest('.xControl').find('.xContent').slideToggle(300);
            if ($this.closest('.xControl').hasClass('active')){
                $this.closest('.xControl').removeClass('active');
            }else{
                $this.closest('.xControl').addClass('active');
            }
            event.preventDefault();
        });
    }
    var donateConfig = function(){
        $(document).on('click','.Donate',function(){
            layer.open({
                type:1,
                area:['300px', '370px'],
                title:'打赏作者',
                resize:false,
                scrollbar:false,
                content:'<div class="donate-box"><div class="meta-pay text-center"><strong>扫一扫支付</strong></div><div class="qr-pay text-center"><img class="pay-img" id="alipay_qr" src="'+xb.alipay+'"><img class="pay-img d-none" id="wechat_qr" src="'+xb.wechat+'"></div><div class="choose-pay text-center mt-2"><input id="alipay" type="radio" name="pay-method" checked><label for="alipay" class="pay-button"><img src="'+xb.thome+'/static/images/alipay.png"></label><input id="wechatpay" type="radio" name="pay-method"><label for="wechatpay" class="pay-button"><img src="'+xb.thome+'/static/images/wechat.png"></label></div></div>'
            });
            $('.choose-pay input[type="radio"]').click(function(){
                var id= $(this).attr('id');
                if(id=='alipay'){$('.qr-pay #alipay_qr').removeClass('d-none');$('.qr-pay #wechat_qr').addClass('d-none')};
                if(id=='wechatpay'){$('.qr-pay #alipay_qr').addClass('d-none');$('.qr-pay #wechat_qr').removeClass('d-none')};
            });
        });
    }
    var OwOcfg = function(){
        if($('#commentform').height()){
            var OwO_demo = new OwO({
                logo:'OωO表情',
                container:document.getElementsByClassName('OwO')[0],
                target:document.getElementsByClassName('OwO')[0],
                api:xb.thome+'/inc/OwO.json',
                position:'down',
                width:'90%',
                maxHeight:'250px'
            });
        }
    }
    var APF = function(){
        var $this = $('#ap-footer');
        $.ajax({
            url:$this.attr('data-json'),
            success:function(e){
                var a = new APlayer({
                    element:document.getElementById('ap-footer'),
                    autoplay:$this.attr('data-autoplay'),
                    fixed:true,
                    loop:$this.attr('data-loop'),
                    order:$this.attr('data-order'),
                    listFolded:true,
                    showlrc:3,
                    theme:'#e6d0b2',
                    listmaxheight:'200px',
                    music:eval(e)
                });
                window.aplayers || (window.aplayers = []),
                window.aplayers.push(a)
            }
        })
    }
    var SnowF = function(){
        var requestAnimationFrame=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60);};
        window.requestAnimationFrame=requestAnimationFrame;
        var flakes=[],canvas=document.getElementById("Snow"),ctx=canvas.getContext("2d"),flakeCount=parseInt($('#Snow').attr('data-count')),mX=-100,mY=-100;
        canvas.width=window.innerWidth;
        canvas.height=window.innerHeight;
        function snow(){
            ctx.clearRect(0,0,canvas.width,canvas.height);
            for(var i=0;i<flakeCount;i++){
                var flake=flakes[i],x=mX,y=mY,minDist=parseInt($('#Snow').attr('data-dist')),x2=flake.x,y2=flake.y;
                var dist=Math.sqrt((x2-x)*(x2-x)+(y2-y)*(y2-y)),dx=x2-x,dy=y2-y;
                if(dist<minDist){
                    var force=minDist/(dist*dist),xcomp=(x-x2)/dist,ycomp=(y-y2)/dist,deltaV=force/2;
                    flake.velX-=deltaV*xcomp;
                    flake.velY-=deltaV*ycomp;
                }else{
                    flake.velX*=0.98;
                    if(flake.velY<=flake.speed){flake.velY = flake.speed;}
                    flake.velX+=Math.cos(flake.step+=.05)*flake.stepSize;
                }
                ctx.fillStyle="rgba("+$('#Snow').attr('data-color')+","+flake.opacity+")";
                flake.y+=flake.velY;
                flake.x+=flake.velX;
                if(flake.y>=canvas.height||flake.y<=0){reset(flake);}
                if(flake.x>=canvas.width||flake.x<=0){reset(flake);}
                ctx.beginPath();
                ctx.arc(flake.x,flake.y,flake.size,0,Math.PI*2);
                ctx.fill();
            }
            requestAnimationFrame(snow);
        };
        function reset(flake){
            flake.x=Math.floor(Math.random()*canvas.width);
            flake.y=0;
            flake.size=(Math.random()*3)+parseInt($('#Snow').attr('data-size'));
            flake.speed=(Math.random()*1)+parseInt($('#Snow').attr('data-speed'));
            flake.velY=flake.speed;
            flake.velX=0;
            flake.opacity=(Math.random()*0.5)+parseInt($('#Snow').attr('data-opacity'));
        }
        function init(){
            for(var i=0;i<flakeCount;i++){
                var x=Math.floor(Math.random()*canvas.width),y=Math.floor(Math.random()*canvas.height),size=(Math.random()*3)+parseInt($('#Snow').attr('data-size')),speed=(Math.random()*1)+parseInt($('#Snow').attr('data-speed')),opacity=(Math.random()*0.5)+parseInt($('#Snow').attr('data-opacity'));
                flakes.push({speed:speed,velY:speed,velX:0,x:x,y:y,size:size,stepSize:(Math.random())/30*parseInt($('#Snow').attr('data-step')),step:0,angle:180,opacity:opacity});
            }
            snow();
        };
        document.addEventListener('mousemove',function(e){mX=e.clientX,mY=e.clientY});
        window.addEventListener('resize',function(){canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
        init();
    }
    //pjax reload
    $.fn.kratos_pjax_reload = function(){
        sidebaraffix();
        showPhotos();
        OwOcfg();
    }
    $(function(){
        gotop();
        sidebaraffix();
        offcanvas();
        menu();
        toSearch();
        xControl();
        showPhotos();
        donateConfig();
        showlove();
        shareMenu();
        OwOcfg();
        wechatpic();
        if($('div').hasClass('aplayer-footer')) APF();
        if($('div').hasClass('xb-snow')) SnowF();
    });
}());
//comment ajax
$('body').on('click','.comment-reply-link',function(){
    if($(this).attr('onclick')) return;
    addComment.moveForm($(this).attr('data-belowelement'),$(this).attr('data-commentid'),$(this).attr('data-respondelement'),$(this).attr('data-postid'));
    return false;
});
jQuery(document).ready(function(jQuery) {
    var __cancel = jQuery('#cancel-comment-reply-link'),
    __cancel_text = __cancel.text(),
    __list = 'comment-list';
    jQuery(document).on('submit','#commentform',function(){
        jQuery.ajax({
            url:xb.ajax_url,
            data:jQuery(this).serialize()+'&action=ajax_comment',
            type:jQuery(this).attr('method'),
            beforeSend:addComment.createButterbar('正在提交'),
            error:function(request){
                var t = addComment;
                t.createButterbar(request.responseText)
            },
            success:function(data){
                jQuery('textarea').each(function(){this.value = ''});
                var t = addComment,cancel = t.I('cancel-comment-reply-link'),temp = t.I('wp-temp-form-div'),respond = t.I(t.respondId),post = t.I('comment_post_ID').value,parent = t.I('comment_parent').value;
                if(parent!='0'){
                    jQuery('#respond').before('<ol class="children">'+data+'</ol>')
                }else if(!jQuery('.'+__list).length){
                    jQuery('#comments-nav').before('<ol class="'+__list+'">'+data+'</ol>')
                }else{
                    if(xb.order=='asc'){
                        jQuery('.'+__list).append(data)
                    }else{
                        jQuery('.'+__list).prepend(data)
                    }
                }
                t.createButterbar('提交成功');
                cancel.style.display = 'none';
                cancel.onclick = null;
                t.I('comment_parent').value = '0';
                if(temp&&respond){
                    temp.parentNode.insertBefore(respond,temp);
                    temp.parentNode.removeChild(temp)
                }
            }
        });
        return false
    });
    addComment = {
        moveForm:function(commId,parentId,respondId){
            var t = this,div,comm = t.I(commId),respond = t.I(respondId),cancel = t.I('cancel-comment-reply-link'),parent = t.I('comment_parent'),post = t.I('comment_post_ID');
            __cancel.text(__cancel_text);
            t.respondId = respondId;
            if(!t.I('wp-temp-form-div')){
                div = document.createElement('div');
                div.id = 'wp-temp-form-div';
                div.style.display = 'none';
                respond.parentNode.insertBefore(div,respond)
            }!comm?(temp = t.I('wp-temp-form-div'),t.I('comment_parent').value = '0',temp.parentNode.insertBefore(respond,temp),temp.parentNode.removeChild(temp)):comm.parentNode.insertBefore(respond,comm.nextSibling);
            jQuery('body').animate({
                scrollTop:jQuery('#respond').offset().top-180
            },400);
            parent.value = parentId;
            cancel.style.display = '';
            cancel.onclick = function(){
                var t = addComment,temp = t.I('wp-temp-form-div'),respond = t.I(t.respondId);
                t.I('comment_parent').value = '0';
                if(temp&&respond){
                    temp.parentNode.insertBefore(respond,temp);
                    temp.parentNode.removeChild(temp)
                }
                this.style.display = 'none';
                this.onclick = null;
                return false
            };
            try{t.I('comment').focus()}catch(e){}
            return false
        },
        I:function(e){
            return document.getElementById(e)
        },
        createButterbar:function(message){
            var t = this;
            layer.msg(message)
        }
    }
});
//highlight
hljs.initHighlightingOnLoad();
//time
var now = new Date();
function createtime(){
    var grt = new Date(xb.ctime);
    now.setTime(now.getTime()+250);
    days = (now-grt)/1000/60/60/24;dnum = Math.floor(days);
    hours = (now-grt)/1000/60/60-(24*dnum);hnum = Math.floor(hours);
    if(String(hnum).length==1){hnum = '0'+hnum;}
    minutes = (now-grt)/1000/60-(24*60*dnum)-(60*hnum);mnum = Math.floor(minutes);
    if(String(mnum).length==1){mnum = '0'+mnum;}
    seconds = (now-grt)/1000-(24*60*60*dnum)-(60*60*hnum)-(60*mnum);snum = Math.round(seconds);
    if(String(snum).length==1){snum = '0'+snum;}
    document.getElementById('span_dt_dt').innerHTML = dnum+'天'+hnum+'小时'+mnum+'分'+snum+'秒';
}
setInterval('createtime()',250);
//copy
if(xb.copy) document.body.oncopy=function(){alert('已复制所选内容。请务必遵守本站条约！');}



﻿var ajaxignore_string = new String('data:, /wp-, /rss, /feed, /sitemap.xml, /sitemap.html, #respond, #toc_i-, javascript:, .pdf, .zip, .rar, .7z, .jpg, .png, .gif, .bmp');
$(document).on("click","*:not(#comments-nav)>a[target!=_blank]",function(){
    if($(this).attr("href")){
        var req_url = $(this).attr("href")
        if(!ajaxcheck_do(req_url)){
            return true
        }else{
            ajax(req_url,"pagelink")
        }
    }
    return false
});
$(document).on("click","#comments-nav a",function(){
    ajax($(this).attr("href"),"comtpagenav");
    return false
});
$(document).on("submit","#searchform",function(){
    ajax(this.action+"?s="+$(this).find("#search").val(),"search");
    return false
});
$(function(){
    window.addEventListener("popstate",function(e){
        if(e.state){
            document.title = e.state.title;
            $("#container").html(e.state.html);
            window.load = $(this).kratos_pjax_reload()
        }
    })
});
var ajaxignore = ajaxignore_string.split(', ');
function ajaxcheck_do(url){
    if(!url) return false;
    for(var i in ajaxignore){
        if(url.indexOf(ajaxignore[i])>=0){
            return false
        }
    }
    return true
}
function ajax(reqUrl,msg,getData){
    NProgress.start();
    $("#container").fadeTo("fast",0.7);
    if(msg=="comtpagenav"){
        $("body,html").animate({
            scrollTop: $(".comment-list").offset().top - xb.site_sh
        },400)
    }else if(msg=="pagelink"||msg=="search"){
        if(reqUrl.indexOf("#")==-1){
            $("body,html").animate({
                scrollTop: $("#kratos-blog-post").offset().top - document.getElementById("kratos-header-section").offsetHeight
            },400)
        }
    }
    $.ajax({
        url: reqUrl,
        type: "GET",
        data: getData,
        beforeSend: function(){
            history.replaceState({
                url: window.document.location.href,
                title: window.document.title,
                html: $(document).find("#container").html(),
            },window.document.title,document.location.href)
        },
        success: function(data){
            document.title = $(data).filter("title").text();
            window.history.pushState({
                url: reqUrl,
                title: $(data).filter("title").text(),
                html: $(data).find("#container").html()
            },$(data).filter("title").text(),reqUrl);
            if(msg=="pagelink"){
                $("#container").html($(data).find("#container").html());
                var anchor = window.location.hash.substring(location.hash.indexOf("#")+1);
                if(anchor){
                    $("body,html").animate({
                        scrollTop: $("#"+anchor).offset().top - xb.site_sh
                    },600)
                }
                try{$("pre>code").each(function(){hljs.highlightBlock(this)})}catch(err){}
            }else if(msg=="search"){
                $("#container").html($(data).find("#container").html());
                $("#searchform").animate({width:"0"},200);
                $("#searchform input").val('')
            }else if(msg=="comtpagenav"){
                $("#container").html($(data).find("#container").html());
                $("#comments-nav").html($(data).find("#comments-nav").html())
            }
            $("#container").fadeTo("fast",1);
            window.load = $(this).kratos_pjax_reload();
            NProgress.done()
        },
        error: function(request){
            $("#container").fadeTo("fast",1);
            location.href = reqUrl
        }
    })
}
(function(root, factory){
    if (typeof define === "function" && define.amd) {
        define(factory)
    } else {
        if (typeof exports === "object") {
            module.exports = factory()
        } else {
            root.NProgress = factory()
        }
    }
})(this,function(){
    var NProgress = {};
    NProgress.version = "0.2.0";
    var Settings = NProgress.settings = {
        minimum: 0.08,
        easing: "linear",
        positionUsing: "",
        speed: 200,
        trickle: true,
        trickleSpeed: 200,
        showSpinner: true,
        barSelector: '[role="bar"]',
        spinnerSelector: '[role="spinner"]',
        parent: "body",
        template: '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
    };
    NProgress.configure = function(options) {
        var key,value;
        for(key in options){
            value = options[key];
            if(value!==undefined&&options.hasOwnProperty(key)){Settings[key] = value}
        }
        return this
    };
    NProgress.status = null;
    NProgress.set = function(n){
        var started = NProgress.isStarted();
        n = clamp(n,Settings.minimum,1);
        NProgress.status = (n===1?null:n);
        var progress = NProgress.render(!started),
        bar = progress.querySelector(Settings.barSelector),
        speed = Settings.speed,
        ease = Settings.easing;
        progress.offsetWidth;
        queue(function(next){
            if(Settings.positionUsing===""){Settings.positionUsing = NProgress.getPositioningCSS()}
            css(bar,barPositionCSS(n,speed,ease));
            if(n===1){
                css(progress,{transition:"none",opacity:1});
                progress.offsetWidth;
                setTimeout(function(){
                    css(progress,{transition:"all "+speed+"ms linear",opacity:0});
                    setTimeout(function(){
                        NProgress.remove();
                        next()
                    },speed)
                },speed)
            }else{
                setTimeout(next,speed)
            }
        });
        return this
    };
    NProgress.isStarted = function(){return typeof NProgress.status === "number"};
    NProgress.start = function(){
        if(!NProgress.status){NProgress.set(0)}
        var work = function(){
            setTimeout(function(){
                if(!NProgress.status){return}
                NProgress.trickle();
                work()
            },Settings.trickleSpeed)
        };
        if(Settings.trickle){work()}
        return this
    };
    NProgress.done = function(force){
        if(!force&&!NProgress.status){return this}
        return NProgress.inc(0.3+0.5*Math.random()).set(1)
    };
    NProgress.inc = function(amount){
        var n = NProgress.status;
        if(!n){
            return NProgress.start()
        }else{
            if(n>1){
                return
            }else{
                if(typeof amount!=="number"){
                    if(n>=0&&n< 0.2){
                        amount = 0.1
                    }else{
                        if(n>=0.2&&n< 0.5){
                            amount = 0.04
                        }else{
                            if(n>=0.5&&n<0.8){
                                amount = 0.02
                            }else{
                                if(n>=0.8&&n<0.99){
                                    amount = 0.005
                                }else{
                                    amount = 0
                                }
                            }
                        }
                    }
                }
                n = clamp(n+amount,0,0.994);
                return NProgress.set(n)
            }
        }
    };
    NProgress.trickle = function(){return NProgress.inc()}; 
    (function(){
        var initial = 0,
        current = 0;
        NProgress.promise = function($promise){
            if(!$promise||$promise.state()==="resolved"){return this}
            if(current===0){NProgress.start()}
            initial++;
            current++;
            $promise.always(function(){
                current--;
                if(current===0){
                    initial = 0;
                    NProgress.done()
                }else{
                    NProgress.set((initial-current)/initial)
                }
            });
            return this
        }
    })();
    NProgress.render = function(fromStart){
        if(NProgress.isRendered()){return document.getElementById("nprogress")}
        addClass(document.documentElement,"nprogress-busy");
        var progress = document.createElement("div");
        progress.id = "nprogress";
        progress.innerHTML = Settings.template;
        var bar = progress.querySelector(Settings.barSelector),perc = fromStart?"-100":toBarPerc(NProgress.status||0),parent = document.querySelector(Settings.parent),spinner;
        css(bar,{transition:"all 0 linear",transform:"translate3d("+perc+"%,0,0)"});
        if(!Settings.showSpinner){
            spinner = progress.querySelector(Settings.spinnerSelector);
            spinner&&removeElement(spinner)
        }
        if(parent!=document.body){addClass(parent,"nprogress-custom-parent")}
        parent.appendChild(progress);
        return progress
    };
    NProgress.remove = function(){
        removeClass(document.documentElement,"nprogress-busy");
        removeClass(document.querySelector(Settings.parent),"nprogress-custom-parent");
        var progress = document.getElementById("nprogress");
        progress&&removeElement(progress)
    };
    NProgress.isRendered = function(){return!!document.getElementById("nprogress")};
    NProgress.getPositioningCSS = function(){
        var bodyStyle = document.body.style;
        var vendorPrefix = ("WebkitTransform" in bodyStyle)?"Webkit":("MozTransform" in bodyStyle)?"Moz":("msTransform" in bodyStyle)?"ms":("OTransform" in bodyStyle)?"O":"";
        if(vendorPrefix+"Perspective" in bodyStyle){
            return "translate3d"
        }else{
            if(vendorPrefix+"Transform" in bodyStyle){
                return "translate"
            }else{
                return "margin"
            }
        }
    };
    function clamp(n,min,max){
        if(n<min){return min}
        if(n>max){return max}
        return n
    }
    function toBarPerc(n){return (-1+n)*100}
    function barPositionCSS(n,speed,ease){
        var barCSS;
        if(Settings.positionUsing==="translate3d"){
            barCSS = {transform:"translate3d("+toBarPerc(n)+"%,0,0)"}
        }else{
            if(Settings.positionUsing==="translate"){
                barCSS = {transform:"translate("+toBarPerc(n)+"%,0)"}
            }else{
                barCSS = {"margin-left":toBarPerc(n)+"%"}
            }
        }
        barCSS.transition = "all "+speed+"ms "+ease;
        return barCSS
    }
    var queue = (function(){
        var pending = [];
        function next(){
            var fn = pending.shift();
            if(fn){fn(next)}
        }
        return function(fn){
            pending.push(fn);
            if(pending.length==1){next()}
        }
    })();
    var css = (function(){
        var cssPrefixes = ["Webkit","O","Moz","ms"],cssProps = {};
        function camelCase(string){return string.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(match,letter){return letter.toUpperCase()})}
        function getVendorProp(name){
            var style = document.body.style;
            if(name in style){return name}
            var i = cssPrefixes.length,capName = name.charAt(0).toUpperCase() + name.slice(1),vendorName;
            while(i--){
                vendorName = cssPrefixes[i]+capName;
                if(vendorName in style){return vendorName}
            }
            return name
        }
        function getStyleProp(name){
            name = camelCase(name);
            return cssProps[name]||(cssProps[name]=getVendorProp(name))
        }
        function applyCss(element,prop,value){
            prop = getStyleProp(prop);
            element.style[prop] = value
        }
        return function(element,properties){
            var args = arguments,prop,value;
            if(args.length==2){
                for(prop in properties){
                    value = properties[prop];
                    if(value!==undefined&&properties.hasOwnProperty(prop)){applyCss(element,prop,value)}
                }
            }else{
                applyCss(element,args[1],args[2])
            }
        }
    })();
    function hasClass(element,name){
        var list = typeof element == "string"?element:classList(element);
        return list.indexOf(" "+name+" ")>=0
    }
    function addClass(element,name){
        var oldList = classList(element),
        newList = oldList+name;
        if(hasClass(oldList,name)){return}
        element.className = newList.substring(1)
    }
    function removeClass(element,name){
        var oldList = classList(element),newList;
        if(!hasClass(element,name)){return}
        newList = oldList.replace(" "+name+" "," ");
        element.className = newList.substring(1,newList.length-1)
    }
    function classList(element){
        return (" "+(element&&element.className||"")+" ").replace(/\s+/gi," ")
    }
    function removeElement(element){
        element&&element.parentNode&&element.parentNode.removeChild(element)
    }
    return NProgress
});