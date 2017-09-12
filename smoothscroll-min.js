/*
Smooth Scroll
Version: 1.4
Developer: Jonathan Chute
Year: 2017
*/
!function(t){t.fn.smoothScroll=function(n){function o(n){return n.length?n.offset().top-parseInt(t("html").css("margin-top"))-a.top:0}function i(n,o){var i=t(window).scrollTop(),r=n>i?n-i:i-n;t("html, body").animate({scrollTop:n},r,function(){o&&(window.location.href=o)})}var r=t(this);if(void 0!==r[0]){var a=t.extend({distance:0,top:0,scrollExternal:!0},n),e=a.distance;if(r.each(function(){var n=window.location.href,o=t(this).prop("href"),i=o.substr(o.indexOf("#"));(n=n.substr(0,n.indexOf("#")))==(o=o.substr(0,o.indexOf("#")))&&t(this).attr("href",i)}),r.click(function(n){var r=window.location.href,s=t(this).prop("href");if(r=r.substr(0,r.indexOf("#")),s=s.substr(0,s.indexOf("#")),r==s){if(n.preventDefault(),!a.distance&&"#"==t(this).attr("href")[0]&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var h=t(this.hash);e=o(h)}i(e,t(this).prop("href"))}}),a.scrollExternal&&window.location.hash){var s=t(window.location.hash);i(e=o(s),!1)}}}}(jQuery);
