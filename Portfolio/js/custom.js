$(document).ready(function(){		
		
	$(window).on('scroll', function(){
		
		var scroll = $(this).scrollTop();

		if(scroll>0){
			$('#header').css({'background':'#FFAC9C'});
            $('#header>.menu>li>a').css({'color':'#fff'});
		}else{
			$('#header').css({'background':'none'});
            $('#header>.menu>li>a').css({'color':'#000'});
		}
	});


	$('#header').on('mouseover', function(){
		$(this).css({'background':'#FFAC9C'});
        $('.menu>li>a').css({'color':'#fff'});
	});

	$('#header').on('mouseleave', function(){
		$(this).css({'background':'none'});
        $('.menu>li>a').css({'color':'#000'});
    });
    
    var menu = $("#header>.menu>li");
	var contents = $("#contents>div")

	menu.on("click", function(e){

		e.preventDefault();

		var tt = $(this);
		var i =tt.index();

		menu.removeClass("on");
		tt.addClass("on");

		var section = contents.eq(i);
        var tg = section.offset().top
          
		$("html, body").animate({scrollTop:tg});
	});
	
});