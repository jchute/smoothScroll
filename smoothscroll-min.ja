/*
  Smooth Scroll
  Version: 1.0
  Developer: Jonathan Chute
  Year: 2016
*/

!function(a){a.fn.smoothScroll=function(b){var c=a(this);if(void 0!==c[0]){var d=a.extend({scrollTo:"",top:0},b);c.click(function(){if(""===d.scrollTo&&location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var b=a(this.hash);b.length?(b=b.length?b:a("[name="+this.hash.slice(1)+"]"),d.scrollTo=b.offset().top):d.scrollTo=0}return a("html,body").animate({scrollTop:d.scrollTo-parseInt(a("html").css("margin-top"))-d.top},500),!1})}}}(jQuery);
