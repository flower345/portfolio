$(document).ready(function () {

    $('.btn').on('click', function (e) {
        e.preventDefault();

        var isOpen = $('#panel').hasClass('on');

        if (isOpen) {
            $('#panel').removeClass('on');
        } else {
            $('#panel').addClass('on');
        }
    });
    
    $('.close').on('click', function (e) {
        e.preventDefault();

        var isClose = $('#panel').hasClass('on');

        if (isClose) {
            $('#panel').removeClass('on');
        } else {
            $('#panel').addClass('on');
        }
    });


    var $Gnb_li = $('#gnb>li');

    $Gnb_li.on('click', function (e) {
        e.preventDefault();

        var isOn = $(this).children('a').hasClass('on');
        if (isOn) {
            $(this).children('a').removeClass('on');
            $(this).children('.sub').stop().slideUp();
        } else {
            $Gnb_li.children('a').removeClass('on');
            $Gnb_li.children('.sub').stop().slideUp();
            $(this).children('a').addClass('on');
            $(this).children('.sub').stop().slideDown();
        }
    });
    
    var isScrolled = false;

    $(window).on('scroll', function(){
        var scroll = $(this).scrollTop();
        if(scroll>0){
            $('.headerWrap').addClass('on');

            if(isScrolled == false){
                $('.header2').css({
                    'position':'fixed',
                    'display':'none'
                }).slideDown();
            }      
            isScrolled = $('.headerWrap').hasClass('on'); 
        }else{
            $('.headerWrap').removeClass('on');
            $('.header2').css({
                'position':'relative',
                'display':'block'
            });
            isScrolled = false;
        }
    });

    var visual = $("#visual>img");
    var button = $(".navi>li");
    
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
	
	
	$(".navi>li").on("click",function(e){
		e.preventDefault();
		
		var i = $(this).index();
		showSlide(i);
    });

    function showSlide(index){
		$(".navi>li>a").removeClass("on");
		$(".navi>li").eq(index).children("a").addClass("on");
		
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

    
    
    $('a').click(function() {
        if ( $(this).attr('href') == '#' ) {
            return false;
        }
    });
});
