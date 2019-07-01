$(function(){



	$(".mobileicon").click(function(){
		$('.navs').toggleClass('navstoggle');
	});

	$(document).click(function(e){
		var mobileicon = $(".mobileicon");
		var navs = $(".navs");
		if(!mobileicon.is(e.target) && mobileicon.has(e.target).length == 0 
			&& !navs.is(e.target) && navs.has(e.target).length == 0){
			$('.navs').removeClass('navstoggle');
		}
	});
	// main_slider
		$('.main_slider').owlCarousel({
		    	autoplay:true,
				autoplayTimeout:2500,
				smartSpeed:2000,
				autoplayHoverPause:true,
				loop:true,
				dots:false,
				margin:0,
				mouseDrag:true,
				singleItem:true,
				autoHeight:true,
				items:1,
			    responsive:{
			        0:{
			            items:1
			        },
			        600:{
			            items:1
			        },
			        1000:{
			            items:1
			        }
			    }
			});

// left sids slider
	$('.owl-theme').owlCarousel({
    	autoplay:true,
		autoplayTimeout:2500,
		smartSpeed:2000,
		autoplayHoverPause:true,
		loop:true,
		dots:true,
		margin:0,
		mouseDrag:true,
		singleItem:true,
		autoHeight:true,
		items:1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
// right side mini lider
	$('.owl-carousel').owlCarousel({
    	autoplay:true,
		autoplayTimeout:2000,
		smartSpeed:1000,
		autoplayHoverPause:true,
		loop:true,
		dots:true,
		margin:0,
		mouseDrag:true,
		singleItem:true,
		autoHeight:true,
		items:1,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	});
// minimixitup
	


});

$(document).on('click','.mixitup_button', function(){
		$(this).addClass('mixitup-control-active')
		.siblings().removeClass('mixitup-control-active')
	});




$(document).ready(function(){
	// $('.mixitup button').click(function(){
	// 	$(this).addClass('mixitup-control-active')
	// 	.siblings().removeClass('mixitup-control-active')
	// });





	$(".shear").hover(function(e){
		var hoveritem = $(this).find("span.fa");

		$(".shear i.fa").css({
			"height" : "0px",
			"width" : "0px"
		});

		if(hoveritem.length == 1 && hoveritem.is(e.target)){
			$(this).find("i.fa").css({
				"height" : "40px",
				"width" : "40px"
			});
		}
	});

	$(window).hover(function(e){
		var target = $(".shear");
		if(!target.is(e.target) && target.has(e.target).length == 0){
			target.find("i.fa").css({
				"height" : "0px",
				"width" : "0px"
			});
		}
	});

});



	var firstmixitup  = $('.mixitupcontrol');
	var mixer = mixitup(firstmixitup);
	var mixer = mixitup(firstmixitup, {
	    selectors: {
	        target: '.imgandcontent'
	    },
	    animation: {
	        duration: 300
	    }
	});

	var secondmixitup = $('.minimixitup_container');
	var mixer = mixitup(secondmixitup);
	var mixer = mixitup(secondmixitup, {
	    selectors: {
	        target: '.mini'
	    },
	    animation: {
	        duration: 300
	    }
	});

	// =========================================
// full window scoll top
// =========================================
$(window).scroll(function(){

	if($(this).scrollTop()>200){
		$("#gotoup").fadeIn();
	}else{
		$("#gotoup").fadeOut();
	}	
});

$("#gotoup").click(function(){
		$("html, body").animate({scrollTop:0}, 2000);
});