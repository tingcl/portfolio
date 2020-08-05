$(document).ready(function(){
    $('.menu-hamburger').on('click', function(){
        $(this).toggleClass('open');
        $('.navbar').toggleClass('open');
    });
});