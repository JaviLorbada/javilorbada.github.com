// console.log('This would be the main JS file.');

// Social Icons Animation
	
		/* Variables */
		
			var social = jQuery("#social li");
			
		/* CSS */
		
			social.css({opacity: .5});
		
		/* Hover */
		
			social.hover(
			    function()
			    {
			        jQuery(this).stop(true,true).animate({opacity: 1}, 200);
			    },
			    function()
			    {
			        jQuery(this).stop(true,true).animate({opacity: .5}, 200);
			    }
			);
