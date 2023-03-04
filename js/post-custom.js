(function($) { "use strict";
	
	//Navigation	

	$('ul.slimmenu').on('click',function(){"use strict";
		var width = $(window).width(); 
		if ((width <= 1200)){ 
			$(this).slideToggle(); 
		}	
		});				
		$('ul.slimmenu').slimmenu(
		{
		resizeWidth: '1200',
		collapserTitle: '',
		easingEffect:'easeInOutQuint',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});	

	
	
	//Tooltip
	
	$(".tipped").tipper();


	//Responsive video
	
	$(".container").fitVids();

		
 	
	/* Post Carousel */
	
	$(document).ready(function() {"use strict";
	 
		$("#owl-blog").owlCarousel({
							  
			pagination:true,
			slideSpeed : 300,
			autoPlay : 5000,
			singleItem:true							
						 
		});
	 
	});		
	

 
 
  })(jQuery); 