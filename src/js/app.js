import 'slick-carousel';

$(document).ready(() => {
	$('.js-hero-slider').slick({
	  nextArrow: '.js-slider-next',
	  prevArrow: '.js-slider-prev',
	  responsive: [
		{
		  breakpoint: 900,
		  settings: {
			dots: true,
			prevArrow: false,
    		nextArrow: false
		  }
		}
	  ]
	})
})

$('.js-search').click(function(event) {
	$(this).find('input').focus()

})
