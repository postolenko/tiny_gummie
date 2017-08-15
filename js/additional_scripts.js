(function($){

	$(window).on("load",function(){

		$(".scroll").mCustomScrollbar();

	});

})(jQuery);

$(document).ready(function() {

	$(".testimonial-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: false,
      // autoplaySpeed: 17000,
    });

});
