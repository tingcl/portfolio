$(document).ready(function(){
    $('.menu-hamburger').on('click', function(){
        $(this).toggleClass('open');
        $('.navbar').toggleClass('open');
    });
    $('.navbar .nav-link').on('click', function(){
        $('.menu-hamburger').removeClass('open');
        $('.navbar').removeClass('open');
    });
    $('nav a[href*="#"]').on('click', function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });
    AOS.init({
        easing: 'ease',
        duration: 2000
    });
});