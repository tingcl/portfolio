$(document).ready(function(){
    $('.menu').on('click', function(){
        $(this).toggleClass('open');
        $('.navbar').toggleClass('open');
        $('body').toggleClass('open');
    });
    $('.navbar .nav-link').on('click', function(){
        $('.menu-hamburger').removeClass('open');
        $('.navbar').removeClass('open');
        $('body').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    });
    $(window).on('resize', function() {
        if($(window).width() < 575.98) {
            $('#img-1').attr('data-aos', '');
            $('#img-2').attr('data-aos', '');
            $('#img-3').attr('data-aos', '');
            $('#img-4').attr('data-aos', '');
        }
    })
    AOS.init({
        easing: 'ease',
        duration: 2000
    });
});