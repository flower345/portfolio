$(document).ready(function(){		
		
	$(window).on('scroll', function(){
		
		var scroll = $(this).scrollTop();

		if(scroll>0){
			$('#header').css({'background':'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);'});
            $('#header>.menu>li>a').css({'color':'#fff'});
		}else{
			$('#header').css({'background':'#c2e9fb'});
            $('#header>.menu>li>a').css({'color':'#191970'});
		}
	});


	$('#header').on('mouseover', function(){
		$(this).css({'background':'linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)'});
        $('.menu>li>a').css({'color':'#fff'});
	});

	$('#header').on('mouseleave', function(){
		$(this).css({'background':'#c2e9fb'});
        $('.menu>li>a').css({'color':'#191970'});
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