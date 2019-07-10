//导航js
$(function () {
    $(".navlist li").mouseenter(function () {
        $(this).find(".sub_menu").show();
    })
    $(".navlist li").mouseleave(function () {
        $(this).find(".sub_menu").hide();
    })

})

$(function(){
	$('.flexslider').flexslider({
		directionNav: true,
		pauseOnAction: false
	});
});

$(function() {
	$(".tab_tit li").hover(function(){
		$(this).addClass("hover");
		$(this).siblings().removeClass("hover");
		var ind_num= $(".tab_tit li").index(this);
		$(".tabBox .tabCon").eq(ind_num).show().siblings().hide();		
		});
});

$(function() {
	$(".serverol-bottom").click(function(){
		$('body,html').animate({scrollTop:0},300);
	});
});

//wap导航js
$(function(){
	$(".headerbox .top_nav").click(function() {
		if ($(".headerbox .m-mobile-nav").is(':hidden')) {
			$(".headerbox .m-mobile-nav").stop().slideDown();
		}else{
			$(".headerbox .m-mobile-nav").stop().slideUp();
		}
	});
	$(".headerbox .m-mobile-nav .tit").click(function() {
		if ($(this).siblings('.sub-box').is(':hidden')) {
			$(this).siblings('.sub-box').stop().slideDown().parent().siblings().find('.sub-box').slideUp();
		}else{
			$(this).siblings('.sub-box').stop().slideUp()
		}
	});
});

$(function(){
$(".apply-con dt").click(function(){
    var th = $(this).parent(".apply-con");
    th.toggleClass("active");
    if (th.hasClass("active")) {
    	th.children().children(".icon-dropDown").attr("class","icon-dropUp");
    } else{
    	th.children().children(".icon-dropUp").attr("class","icon-dropDown");
    }
  })
});