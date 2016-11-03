/*
  Smooth Scroll
  Version: 1.1
  Developer: Jonathan Chute
  Year: 2016
*/

!function(a){a.fn.smoothScroll=function(b){var c=a(this);if(void 0!==c[0]){var e,d=a.extend({scrollTo:"",top:0},b);c.click(function(){if(""===d.scrollTo){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);b.length?(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),e=b.offset().top):e=0}}else e=d.scrollTo;return a("html,body").animate({scrollTop:e-parseInt(a("html").css("margin-top"))-d.top},500),!1})}}}(jQuery);
