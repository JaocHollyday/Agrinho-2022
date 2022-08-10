$(function () {


    //HEADER
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            if (!$('.main_header').hasClass('fixed')) {
                $('.main_header').stop().addClass('fixed').css('top', '-100px').animate(
                    {
                        'top': '0px'
                    }, 500);
            }
        }
        else {
            $('.main_header').removeClass('fixed');
        }
    });


});

var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
});

var btn = $("#back-to-top");
btn.click(function () {
    $('html, body').animate({ scrollTop: 0 }, 'slow');
});