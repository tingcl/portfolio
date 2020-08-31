var submitted = false;

$(document).ready(function(){
    $('.menu-hamburger').on('click', function(){
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
    $('#gform').on('submit', function(){
        alert("Response submitted!");
        setTimeout(function() { $("#gform")[0].reset(); }, 100);
    });
    AOS.init({
        easing: 'ease',
        duration: 2000
    });

});