/*
Smooth Scroll
Version: 1.5
Developer: Jonathan Chute
Year: 2017
*/
!function(t){t.fn.smoothScroll=function(o){function n(o){return o.length?o.offset().top-parseInt(t("html").css("margin-top"))-e.top:0}function a(o,n){t(window).scrollTop();t("html, body").animate({scrollTop:o})}var i=t(this);if(void 0!==i[0]){var e=t.extend({distance:0,top:0,scrollExternal:!0},o),c=e.distance;if(i.not('[href="#"]').click(function(o){if(!e.distance&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=t(this.hash);c=n(i)}a(c,t(this).prop("href"))}),e.scrollExternal&&window.location.hash){var l=t(window.location.hash);a(c=n(l),!1)}}}}(jQuery);
