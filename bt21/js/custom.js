$(document).ready(function(){

    var slideImg = $("#visual");

    var slides = slideImg.find(">div"); 

    var currentIndex = 0;  

    var slideCount = slides.length;

    function showNext(){
        var nextIndex = (currentIndex + 1) % slideCount;  

        slides.eq(currentIndex).fadeOut(800);   

        slides.eq(nextIndex).fadeIn(800);   
        console.log("currentIndex :" + currentIndex);
        console.log("nextIndex :" + nextIndex);

        currentIndex = nextIndex;
    }

    setInterval(showNext, 3000);
});


$('.slide-2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('.slide-3').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});
