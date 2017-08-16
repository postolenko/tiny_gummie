$(document).ready(function() {

	$(".testimonial-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      slidesToShow: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      responsive: [
	    {
	      breakpoint: 600,
	      settings: {
	        adaptiveHeight: true
	      }
	    }
	  ]
    });

});
