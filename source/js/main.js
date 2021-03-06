// Back to Top Button
//http://www.paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery

$(document).ready(function(){

  $('.bxslider').bxSlider();  
  
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


  // Single Page Scroll
  //http://anythinggraphic.net/sticky-navigation-and-scrolling/

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

  //Sticky Nav Bar

  $(window).scroll(function() {
  if ($(this).scrollTop() > 600){  
      $('nav ul').addClass("sticky");   
    }
    else{
      $(".selected").removeClass("selected");
      $(this).addClass("selected");
      $('nav ul').removeClass("sticky");
    }
  }); 

  $('#slider1').bxSlider({
    auto: true,
    //autoControls: true,
    pause: 3000,
    //slideMargin: 20
  });

  $('#slider2').bxSlider({
    auto: true,
    //captions: true,
    //autoControls: true,
    pause: 3000,
    //slideMargin: 20
  });

  $('#slider3').bxSlider({
    auto: true,
    captions: true,
    autoControls: true,
    pause: 5000,
    //slideMargin: 20
  });


});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
jQuery(document).ready(function(){
    if( !isMobile.any() ){
        $(window).stellar({
        horizontalOffset: 50,
        verticalOffset: 150,
        positionProperty: 'transform'
      });;
    }
});














