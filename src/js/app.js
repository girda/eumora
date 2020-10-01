import 'slick-carousel';

$(document).ready(() => {
	$('.js-hero-slider').slick({
	  nextArrow: '.js-slider-next',
	  prevArrow: '.js-slider-prev'
	})

	console.log($('.js-hero-slider'))
	console.log('I`m here')
})

