$(document).ready(function() {
    /* STICKY NAVBAR SCRIPT */
    stickyNav();
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if(top > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    })

    /* OPEN MENU MOBILE SCRIPT */
    $('.menu-mobile').on('click', function() {
        $('.menu').toggleClass('menu-show');
        $('.menu-mobile i').toggleClass('menu-show');
        $('body').toggleClass('disabled-scroll');
        $('.navbar .menu li a').on('click', function() {
            $('.menu-mobile').trigger('click');
        })
    })
});

function stickyNav() {
    var top = $(document).scrollTop();
    if(top > 20) {
        $('.navbar').addClass("sticky");
    } else {
        $('.navbar').removeClass("sticky");
    }
}