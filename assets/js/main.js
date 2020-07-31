$(document).ready(function(){
    $('.menu-toggle').on('click', function(){
        $(this).toggleClass('open');
        $('.nav-bar').toggleClass('open');
    });
});