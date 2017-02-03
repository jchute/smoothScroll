/*
Smooth Scroll
Version: 1.2
Developer: Jonathan Chute
Year: 2017
*/
!function(a){a.fn.smoothScroll=function(b){var c=a(this);if(void 0!==c[0]){var e,d=a.extend({scrollTo:"",top:0,mobile:""},b);c.click(function(){if(""===d.scrollTo){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);b.length?(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),e=b.offset().top-parseInt(a("html").css("margin-top")),e-=""!==d.mobile&&a("body").width()<780?d.mobile:d.top):e=0}}else e=d.scrollTo;return a("html,body").animate({scrollTop:e},500),!1})}}}(jQuery);
