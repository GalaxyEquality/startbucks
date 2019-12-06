/*
* @Author: 徐嘉晖
* @Date:   2019-12-03 15:42:27
* @Last Modified by:   徐嘉晖
* @Last Modified time: 2019-12-05 15:18:46
*/
$(function(){
	var i=0;
	$('.nav .header .hamburger').click(function(event) {
		i++;
		$(this).toggleClass('icon-cross-fill');
		$(this).toggleClass('icon-gengduo');
		$('.nav .header .primary').toggle();
		// $('.nav .content .body').toggle().siblings().toggle();

		if(i%2!=0){
			$('.nav').css({'height':'100%','position':'fixed'});
			$('.nav .content .body').fadeIn(100);
			$('.nav .content .body').css('transform', 'scale(1)');
			$('.nav .content .account-entry').hide();
		}
		else{
			$('.nav').css({'height': '','position': ''});
			$('.nav .content .body').css('transform', 'scale(1.3)');
			$('.nav .content .body').fadeOut(100,function(){
				$('.nav .content .account-entry').show();
			});
		}
	});
	$(document).ready(function() {
		var w=$('.contentbase').width();
		$('.contentbase .banner ul li').css('width', w+'px');
	});
	$(window).resize(function(event) {
		var w=$('.contentbase').width();
		$('.contentbase .banner ul li').css('width', w+'px');
		$('.contentbase .banner ul').css('margin-left', -n*w+'px');
	});
	var n=0;
	$('.contentbase ul .icon-jiantou').click(function(event) {
		n++;
		var w=$('.contentbase').width();
		if(n>6){
			$('.contentbase .banner ul').css('margin-left', '0px');
			n=1;
		}
		$('.contentbase .banner ul').stop().animate({'margin-left': -n*w+'px'}, 1200);
	});
	var timer;
	function go(){
		clearInterval(timer);
		timer=setInterval(function(){
			n++;
			
		var w=$('.contentbase').width();
		if(n>6){
			$('.contentbase .banner ul').css('margin-left', '0px');
			n=1;
		}
		$('.contentbase .banner ul').stop().animate({'margin-left': -n*w+'px'}, 1200);
		},5000)
	}
	go();
	$('.contentbase .banner').hover(function() {
		clearInterval(timer)
	}, function() {
		go();
	});
})