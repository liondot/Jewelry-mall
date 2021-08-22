
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
          $("header").addClass("active");
      } else {
          //remove the background property so it comes transparent again (defined in your css)
         $("header").removeClass("active");
      }
  });



$('.submenu li').mouseover(function(){
      $(this).siblings().css('opacity','0.5');
 });

 $('.submenu li').mouseout(function(){
  $(this).siblings().css('opacity','1');
});


