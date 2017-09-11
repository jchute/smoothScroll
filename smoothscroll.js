/*
Smooth Scroll
Version: 1.3
Developer: Jonathan Chute
Year: 2017
*/
(function( $ ) {
    $.fn.smoothScroll = function(options) {
        var mainObject = $(this);

        if(mainObject[0] === undefined)
            return;

        var settings = $.extend( {
            'distance': 0,
            'top': 0,
            'scrollExternal': false,
        }, options);

        var distance = settings.distance;

        mainObject.click(function(e) {
            e.preventDefault();
            if(!settings.distance) {
                var href = $(this).attr('href');
                if($(this).attr('href')[0] == '#') {
                    if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        distance = GetElementScrollTop( target );
                    }
                }
            }
            AnimateScroll( distance );
        });

        if(settings.scrollExternal && window.location.hash) {
            var target = $(window.location.hash);
            var distance = GetElementScrollTop( target );
            AnimateScroll(distance);
        }

        function GetElementScrollTop( element ) {
            if (element.length) {
                return element.offset().top - parseInt($('html').css('margin-top')) - settings.top;
            } else {
                return 0;
            }
        }

        function AnimateScroll( distance ) {
            var current = $(window).scrollTop();
            var duration = (distance > current) ? distance - current : current - distance;
            $('html, body').animate({
                scrollTop: distance
            }, duration);
        }

    };
})( jQuery );
