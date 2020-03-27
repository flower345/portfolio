$(document).ready(function(){
    
        $('header>.menu>li').on('mouseover', function(){
		$('.sub').stop().slideDown();
		$('.bgPanel').stop().slideDown();
	});

	$('header>.menu>li').on('mouseleave', function(){
		$('.sub').stop().slideUp();
		$('.bgPanel').stop().slideUp();
	});
    
    var visual = $("#visual>img");
    var button = $(".button>li");

	showSlide(0);
	timer();

	var total = $("#visual>img").length;
    
	$(".next").on("click",function(e){
		e.preventDefault();
		
		if(currentIndex==total - 1){
			currentIndex=0;
		}else{
			currentIndex++;
		}
		showSlide(currentIndex);
	});
	
	$(".prev").on("click",function(e){
		e.preventDefault();

		if(currentIndex==0){
			currentIndex=total - 1;
		}else{
			currentIndex--;
		}
		showSlide(currentIndex);
	});
	
	
	$(".button>li").on("click",function(e){
		e.preventDefault();
		
		var i = $(this).index();
		showSlide(i);
	});	
	
	function showSlide(index){
		$(".button>li>a").removeClass("on");
		$(".button>li").eq(index).children("a").addClass("on");
		
		$("#visual>img").fadeOut().removeClass("on");
		$("#visual>img").eq(index).fadeIn().addClass("on");

		currentIndex = index;
	}	

    function timer(){
		setInterval(function(){
			var n = currentIndex +1;
			if(n==visual.size()){n=0}
			button.eq(n).trigger("click")
		}, 4000);
	};