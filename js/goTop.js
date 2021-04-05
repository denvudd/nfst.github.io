$(document).ready(function(){
  $('body').append('<a href="#" id="#go-top" class="footer__button"><img src="img/arrow-up-circle.svg" alt=""></a>');
});

$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, 500) 
  })
 }
});

$(function() {
 $("#go-top").scrollToTop();
});