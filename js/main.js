(function($) {
    'use strict';
	
	jQuery(document).ready(function(){
		
		
		/* START MOBILE-MENU  */
			$('.main_menu').slicknav({
				prependTo:".mobile-nav",
			});
		/* START MOBILE-MENU  */
		
		/* START RIPPLES JS */		
			var $home = $('#home');
			$home.ripples({
				resolution: 512,
				dropRadius: 20,
				perturbance: 0.04,
			});
		/* END RIPPLES JS */
		
	});	
	
		/*PRELOADER JS*/
			$(window).on('load', function() {  
				$('.spinner').fadeOut();
				$('.preloader').delay(350).fadeOut('slow'); 
			}); 
		/*END PRELOADER JS*/
		
		// Wow
			new WOW().init();
})(jQuery);

document.getElementById('whatsapp-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var phoneNumber = document.getElementById('phone-number');
    if (phoneNumber.style.display === 'none') {
        phoneNumber.style.display = 'block';
    } else {
        phoneNumber.style.display = 'none';
    }
});
document.getElementById('github-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var github = document.getElementById('github');
    if (github.style.display === 'none') {
        github.style.display = 'block';
    } else {
        github.style.display = 'none';
    }
});
document.getElementById('linkedin-icon').addEventListener('click', function(event) {
    event.preventDefault();
    var linkedin = document.getElementById('linkedin');
    if (linkedin.style.display === 'none') {
        linkedin.style.display = 'block';
    } else {
        linkedin.style.display = 'none';
    }
});

