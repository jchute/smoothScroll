/*
Smooth Scroll
Version: 1.2
Developer: Jonathan Chute
Year: 2017
*/
(function( $ ) {
    $.fn.smoothScroll = function(options) {
        var mainObject = $(this);

        if(mainObject[0] === undefined)
            return;

        var settings = $.extend( {
            'scrollTo': '',
            'top': 0,
            'mobile': ''
        }, options);
        
        var scrollTo;

        mainObject.click(function() {
            if('' === settings.scrollTo) {
                if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    if (target.length) {
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        scrollTo = target.offset().top - parseInt($('html').css('margin-top'));
                        if('' !== settings.mobile && $('body').width() < 780) {
                            scrollTo -= settings.mobile;
                        } else {
                            scrollTo -= settings.top;
                        }
                    } else {
                        scrollTo = 0;
                    }
                }
            } else {
                scrollTo = settings.scrollTo;
            }
            $('html,body').animate({
                scrollTop: scrollTo
            }, 500);

            return false;
        });

    };
})( jQuery );
