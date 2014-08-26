// Back to Top Button
//http://www.paulund.co.uk/how-to-create-an-animated-scroll-to-top-with-jquery

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

});

 //Slider
(function() {
  var sliderUL = $('div.slider').css('overflow', 'hidden').children('ul'),
    imgs = sliderUL.find('img'),
    imgWidth = imgs[0].width, // 600
    imgsLen = imgs.length, // 4
    current = 1,
    totalImgsWidth = imgsLen * imgWidth; // 2400

  $('#slider-nav').show().find('button').on('click', function() {
    var direction = $(this).data('dir'),
      loc = imgWidth; // 600

    // update current value
    ( direction === 'next' ) ? ++current : --current;

    // if first image
    if ( current === 0 ) {
      current = imgsLen;
      loc = totalImgsWidth - imgWidth; // 2400 - 600 = 1800
      direction = 'next';
    } else if ( current - 1 === imgsLen ) { // Are we at end? Should we reset?
      current = 1;
      loc = 0;
    }

    transition(sliderUL, loc, direction);
  });

  function transition( container, loc, direction ) {
    var unit; // -= +=

    if ( direction && loc !== 0 ) {
      unit = ( direction === 'next' ) ? '-=' : '+=';
    }

    container.animate({
      'margin-left': unit ? (unit + loc) : loc
    });
  }

})();










