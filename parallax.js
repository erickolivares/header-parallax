$(document).ready(function() {

    var parallax = $('.parallax'),
        divOuterHeight = parallax.outerHeight();

    $(window).scroll(function() {
        var scrollY = $(window).scrollTop();

        var speedScroll = (scrollY/divOuterHeight)*100;

        if (speedScroll == 0) {
            parallax.css('background-position', '50% 0%');
        } else if (speedScroll < 100) {
            parallax.css('background-position', '50% ' + speedScroll + '%');
        } else if (speedScroll > 100) {
            parallax.css('background-position', '50% 100%');
        }
    });
    
});
