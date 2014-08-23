// Back to Top Button

$(document).ready(function(){
  
  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 400) {
      $('.scrollToTop').fadeIn();
    } else {
      $('.scrollToTop').fadeOut();
    }
  });
  
  //Click event to scroll to top
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
  
});

// Single Page Scroll

$(document).ready(function(){

  $('a').click(function(){
  
    var el = $(this).attr('href');
    var elWrapped = $(el);
    
    scrollToDiv(elWrapped,40);

    $(".selected").removeClass("selected");
    $(this).addClass("selected");

    return false;
    
  });
    
  function scrollToDiv(element,navheight){
    
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;
    
    $('body,html').animate({
    scrollTop: totalScroll
    }, 700);
  
  }

});

//Sticky Nav Bar

$(window).scroll(function() {
if ($(this).scrollTop() > 600){  
    $('nav ul').addClass("sticky logo-shown");   
  }
  else{
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
    $('nav ul').removeClass("sticky logo-shown");
  }
});
