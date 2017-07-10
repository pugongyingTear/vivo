$(window).ready(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>680){
			$($(".lunbo")[0]).css("display","none");
			$($(".footer")[0]).css({
				'z-index':'-1',
				'position':' fixed',
				'display':'block',
			});
			$($(".productSize")[0]).css("margin-bottom","350px");	
		}
		else{
			$($(".lunbo")[0]).css("display","block")
			$($(".footer")[0]).css("display","none")
		}
		
	}).trigger("scroll");
})


$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>80){
			$($(".lunbo")[0]).css("opacity","0.6");
			$($(".productSize")[0]).css("background-color","#FFFFFF");
		}
		else{
			$($(".lunbo")[0]).css("opacity","1");
//			$($(".top")[0]).slideUp();
		}
	})
})

$(function(){
	$(window).scroll(function(){
		if($(window).scrollTop()>350){
			$($(".top")[0]).show();
		}
		else{
			$($(".top")[0]).hide();
//			
		}
	})
})


$(function(){
	$(".mediaWeixin").hover(function(){
		$(this).css("background-color","#20A900");
		$(".erweima").css("display","block");
		$(".sanjiao").css("display","inline-block");
	},function(){
		$(this).css("background-color","#222222");
		$(".erweima").css("display","none");
		$(".sanjiao").css("display","none");
	})
})

$(function(){
	$(".collapseImg").click(function(){
		$(".nav-show").css("display","block");
		$(".collapseImg").css("display","none");
		$(".xx").css("display","block");
	})
})
$(function(){
	$(".xx").click(function(){
		$(".nav-show").css("display","none");
		$(".xx").css("display","none");
		$(".collapseImg").css("display","block");
	})
})
$(function(){
	$(".nav-head>li:nth-child(2)").hover(function(){
		$(".productList").css("display","block");
	},function(){
		$(".productList").css("display","none");
	})
});