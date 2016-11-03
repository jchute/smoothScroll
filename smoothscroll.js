/*
Smooth Scroll
Version: 1.1
Developer: Jonathan Chute
Year: 2016
*/
(function( $ ) {
    $.fn.smoothScroll = function(options) {
        var mainObject = $(this);

        if(mainObject[0] === undefined)
            return;

        var settings = $.extend( {
            'scrollTo': '',
            'top': 0
        }, options);
        
        var scrollTo;

        mainObject.click(function() {
            if('' === settings.scrollTo) {
                if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    if (target.length) {
                        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                        scrollTo = target.offset().top;
                    } else {
                        scrollTo = 0;
                    }
                }
            } else {
                scrollTo = settings.scrollTo;
            }
            $('html,body').animate({
                scrollTop: scrollTo - parseInt($('html').css('margin-top')) - settings.top
            }, 500);

            return false;
        });

    };
})( jQuery );
