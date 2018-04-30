/*
Smooth Scroll
Version: 1.6
Developer: Jonathan Chute
Year: 2017
*/
!function(t){t.fn.smoothScroll=function(o){var n=t(this);if(void 0!==n[0]){var i=t.extend({distance:0,top:0,scrollExternal:!0},o),a=i.distance;if(n.not('[href="#"]').click(function(o){if(!i.distance&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var n=t(this.hash);a=h(n)}t(this).get(0).href===window.location.href&&c(a,t(this).prop("href"))}),i.scrollExternal&&window.location.hash){var e=t(window.location.hash);c(a=h(e),!1)}}function h(o){return o.length?o.offset().top-parseInt(t("html").css("margin-top"))-i.top:0}function c(o,n){t(window).scrollTop();t("html, body").animate({scrollTop:o})}}}(jQuery);
