/*
Smooth Scroll
Version: 1.3
Developer: Jonathan Chute
Year: 2017
*/
!function(t){t.fn.smoothScroll=function(n){function o(n){return n.length?n.offset().top-parseInt(t("html").css("margin-top"))-e.top:0}function a(n){var o=t(window).scrollTop(),a=n>o?n-o:o-n;t("html, body").animate({scrollTop:n},a)}var i=t(this);if(void 0!==i[0]){var e=t.extend({distance:0,top:0,scrollExternal:!1},n),r=e.distance;if(i.click(function(n){if(n.preventDefault(),!e.distance){t(this).attr("href");if("#"==t(this).attr("href")[0]&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=t(this.hash);r=o(i)}}a(r)}),e.scrollExternal&&window.location.hash){var l=t(window.location.hash);a(r=o(l))}}}}(jQuery);
