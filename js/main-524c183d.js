$(document).ready(function(){$(window).scroll(function(){$(this).scrollTop()>400?$(".scrollToTop").fadeIn():$(".scrollToTop").fadeOut()}),$(".scrollToTop").click(function(){return $("html, body").animate({scrollTop:0},800),!1})}),$(document).ready(function(){function o(o,l){var s=o.offset(),e=s.top,t=e-l;$("body,html").animate({scrollTop:t},700)}$("a").click(function(){var l=$(this).attr("href"),s=$(l);return o(s,40),$(".selected").removeClass("selected"),$(this).addClass("selected"),!1})}),$(window).scroll(function(){$(this).scrollTop()>600?$("nav ul").addClass("sticky logo-shown"):($(".selected").removeClass("selected"),$(this).addClass("selected"),$("nav ul").removeClass("sticky logo-shown"))});