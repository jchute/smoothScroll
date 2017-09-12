/*
Smooth Scroll
Version: 1.4
Developer: Jonathan Chute
Year: 2017
*/
!function(t){t.fn.smoothScroll=function(n){function o(n){return n.length?n.offset().top-parseInt(t("html").css("margin-top"))-e.top:0}function i(n,o){t(window).scrollTop();t("html, body").animate({scrollTop:n})}var r=t(this);if(void 0!==r[0]){var e=t.extend({distance:0,top:0,scrollExternal:!0},n),a=e.distance;if(r.each(function(){var n=window.location.href,o=t(this).prop("href"),i=o.substr(o.indexOf("#"));(n=n.substr(0,n.indexOf("#")))==(o=o.substr(0,o.indexOf("#")))&&t(this).attr("href",i)}),r.click(function(n){var r=window.location.href,s=t(this).prop("href");if(r=r.substr(0,r.indexOf("#")),s=s.substr(0,s.indexOf("#")),r==s){if(n.preventDefault(),!e.distance&&"#"==t(this).attr("href")[0]&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var h=t(this.hash);a=o(h)}i(a,t(this).prop("href"))}}),e.scrollExternal&&window.location.hash){var s=t(window.location.hash);i(a=o(s),!1)}}}}(jQuery);
