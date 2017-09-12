/*
Smooth Scroll
Version: 1.4
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
            'scrollExternal': true,
        }, options);

        var distance = settings.distance;

        // Normalize href calls to minimize page reloads
        mainObject.each(function() {
            var current = window.location.href,
                href = $(this).prop('href'),
                hash = href.substr(href.indexOf('#'));
            current = current.substr(0, current.indexOf('#'));
            href = href.substr(0, href.indexOf('#'));
            if(current == href) {
                $(this).attr('href', hash);
            }
        });

        mainObject.click(function(e) {
            // Prevent the page from reloading when navigating to same page
            var current = window.location.href,
                href = $(this).prop('href');
            current = current.substr(0, current.indexOf('#'));
            href = href.substr(0, href.indexOf('#'));
            if(current == href) {
                e.preventDefault();
                // Get the element's href distance from top if a requested distance hasn't been set.
                if(!settings.distance) {
                    if($(this).attr('href')[0] == '#') {
                        if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                            var target = $(this.hash);
                            distance = GetElementScrollTop( target );
                        }
                    }
                }
                AnimateScroll( distance, $(this).prop('href') );
            }
        });

        if(settings.scrollExternal && window.location.hash) {
            var target = $(window.location.hash);
            var distance = GetElementScrollTop( target );
            AnimateScroll(distance, false);
        }

        function GetElementScrollTop( element ) {
            if (element.length) {
                return element.offset().top - parseInt($('html').css('margin-top')) - settings.top;
            } else {
                return 0;
            }
        }

        function AnimateScroll( distance, href ) {
            var current = $(window).scrollTop();
            var duration = (distance > current) ? distance - current : current - distance;
            $('html, body').animate({
                scrollTop: distance
            });
        }

    };
})( jQuery );
