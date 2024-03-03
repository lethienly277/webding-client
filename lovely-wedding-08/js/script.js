$(document).ready(function() {
	"use strict";

	

	/*ScrollR */
	if ($(window).width() > 1024) {
	var s = skrollr.init({
		forceHeight: false
	});
	}



	/*Main Menu Button */
	$('.main_menu_btn').on("click", function(e){
		$(this).toggleClass('main_menu_btn_open');
		$('.main_menu_block').toggleClass('main_menu_block_open').fadeToggle();
		$('.main_menu_block').find('.menu_wrapper').toggleClass('active');
		$('header .anim').toggleClass('active');
		e.preventDefault();
	});
	
	/* Section Background */
	$('section, .parallax').each(function(){
		var image = $(this).attr('data-image');
		if (image){
			$(this).css('background-image', 'url('+image+')');	
		}
	});
	

	
	
	/*FireFly in Intro*/
	$.firefly({
		color: '#fff', minPixel: 1, maxPixel: 3, total : 55, on: '.into_firefly'
	});


})(jQuery);