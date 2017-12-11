var t = n =0;
var count;
$(function() {
/*导航栏点击变色*/
	$('.menu-primary li').click(function() {
		$(this).addClass("select").siblings().removeClass("select");	
	});
/*导航栏点击变色*/

/*导航栏图标动画*/
	setInterval(function () {
		msg();
	}, 400)
	function msg(){
        var ys = $(".hot")
        if(!($(ys).is(":animated"))){
            $(ys).animate({"top":"18px",},200).animate({"top":"20px",},200)
       
    }}
/*导航栏图标动画*/

/*菜单滑过显子菜单*/
	$('.menu li:eq(0)').hover(function(){
		$('.sub-mune1').show("slow");
	},function(){
		$('.sub-mune1').hide();
	});
	$('.menu li:eq(6)').hover(function(){
		$('.sub-mune2').show("slow");
	},function(){
		$('.sub-mune2').hide();
	});
/*菜单滑过显子菜单*/

/*轮播*/
    var i = 0;
    $(".prev").click(function() {
    	if (i == 0) {
            $(".featured-content a").hide();
    		$(".featured-content a:eq(5)").show();
    		$('.featured-wrapper li:eq(5)').toggleClass("on").siblings().removeAttr("class");
    		i = 5;
    	}
    	else {
    	    i--;
    	    $(".featured-content a").hide();
    	    $('.featured-content a:eq('+i+')').show();
    	    $('.featured-wrapper li:eq('+i+')').toggleClass("on").siblings().removeAttr("class");
    	}

    });
    $(".next").click(function() {
    	if (i == 5) {
            $(".featured-content a").hide();
    		$(".featured-content a:eq(0)").show();
    		$('.featured-wrapper li:eq(0)').toggleClass("on").siblings().removeAttr("class");
    		i=0;
    	}
    	else {
    		i++;
    	    $(".featured-content a").hide();
    	    $('.featured-content a:eq('+i+')').show();
    	    $('.featured-wrapper li:eq('+i+')').toggleClass("on").siblings().removeAttr("class");
    	}
    });
    
    count=$(".featured-content a").length;
    $(".featured-wrapper li").click(function() {
        i = $(this).index();
        if (i >= count) return;
        $(".featured-content a").hide();
        $('.featured-content a:eq('+i+')').show();
        $(this).toggleClass("on");
        $(this).siblings().removeAttr("class");
        return false;
    });
    t = setInterval("showAuto()", 4000);
    $(".featured-wrapper").hover(function(){clearInterval(t)}, function(){
    	t = setInterval("showAuto()", 4000);
    });
/*轮播*/
     
/*tab选项卡切换*/
     $(".tabs-line span").mouseover(function() {
    	$(this).addClass("current").siblings().removeClass("current");
    	var index = $(this).index();
		number = index;
		$('.article-tab ul').hide();
		$('.article-tab ul:eq('+index+')').show();
    });
/*tab选项卡切换*/

/*分享侧栏*/
    $(".share").hover(function() {
    	if(!($(".share-text").is(":animated"))){
            $(".share-text").animate({"right":"0px"},"slow");       
        }
    },function() {
    	// if(!($(".share-text").is(":animated"))){
            $(".share-text").animate({"right":"-226px"},"slow");
        // }
    });
/*分享侧栏*/

/*广告固定定位*/
    $(window).bind("scroll", function () {
        var height = $(window).scrollTop();
        var height = parseInt(height);
    	if (height<658) {
    		$(".returnTop").hide();
    		$(".adRight2").css("position","relative");
        }
    	else if (height>=658&&height<=2050) {
    		$(".adRight2").css("position","relative");
    		$(".returnTop").show();
    	}
    	else if(height>2050){
    		$(".adRight2").css("position","fixed");
    		$(".returnTop").show();
    	}
    });
/*广告固定定位*/

/*步骤阅读*/
    $(".text").hover(function(){
    	$(this).find(".more").show();
    },function(){
    	$(".more").hide();
    });
/*步骤阅读*/

/*底部图片滑过效果*/
    $(".wanwang1").hover(function() {
        if(!($(".wanwang1").is(":animated"))) {
            $(".wanwang1").animate({"top":"-25px"},"slow");
        }
    },function() {
    	if(!($(".wanwang1").is(":animated"))) {
    	    $(".wanwang1").animate({"top":"0px"},"slow");
        }
    });
/*底部图片滑过效果*/

}) 
function showAuto() {
    n = n >=(count -1) ?0 : ++n;
    $(".featured li").eq(n).trigger('click');
}

