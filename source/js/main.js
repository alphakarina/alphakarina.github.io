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

    //Slider

  (function() {
      var container = $('div.slider').css('overflow', 'hidden').children('ul'),
        slider = new Slider( container, $('#slider-nav') );

      slider.nav.find('button').on('click', function() {
        slider.setCurrent( $(this).data('dir') );
        slider.transition();
      });                 

    function Slider( container, nav ) {
      this.container = container;
      this.nav = nav.show();

      this.imgs = this.container.find('img');
      this.imgWidth = this.imgs[0].width; // 600
      this.imgsLen = this.imgs.length;

      this.current = 0;
    }

    Slider.prototype.transition = function( coords ) {
      this.container.animate({
        'margin-left': coords || -( this.current * this.imgWidth )
      });
    };

    Slider.prototype.setCurrent = function( dir ) {
      var pos = this.current;

      pos += ( ~~( dir === 'next' ) || -1 );
      this.current = ( pos < 0 ) ? this.imgsLen - 1 : pos % this.imgsLen;

      return pos;
    }; 
  })();  
     
});












