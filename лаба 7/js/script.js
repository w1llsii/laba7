$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow:1,
        pauseOnFocus:true,
        waitForAnimate: false,
        centerMode: false,
        variableWidth: false,
        adaptiveWidth: true,
        cssEase: 'linear'
    });
});
