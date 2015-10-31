


// listed in chronological order and then physical order*/

$(document).ready(function(){
$('.contentbox').hide();
	$('#titlebox').fadeIn('fast');
	$('#infobox').fadeIn('slow');
// for the main tabs
		// first enlarge/ white up function
			// menu tab
	$('#menutab').mouseenter(function(){
      		 
		 /*$('#menutab a').animate({
           		fontSize: '+=5px'
       		});*/
		$('#menutab a').css('text-shadow', '2px 2px 17px darkgray');

	});
	$('#menutab').mouseleave(function(){
      	
		  /*$('#menutab a').animate({
           		fontSize: '-=5px'
       		});*/
		$('#menutab a').css("text-shadow", '2px 2px 17px black');
	});	
 			// Our story tab
			//
	$('#ourstorytab').mouseenter(function(){
      		 
		 /*$('#ourstorytab a').animate({
           		fontSize: '+=5px'
       		});*/
		$('#ourstorytab a').css("text-shadow", '2px 2px 17px darkgray');

	});
	$('#ourstorytab').mouseleave(function(){
      	
		  /*$('#ourstorytab a').animate({
           		fontSize: '-=5px'
       		});*/
		$('#ourstorytab a').css("text-shadow", '2px 2px 17px black');
	});	

			// info tab
			//
	$('#infotab').mouseenter(function(){
      		 
		 /*$('#infotab a').animate({
           		fontSize: '+=5px'
       		});*/
		$('#infotab a').css("text-shadow", '2px 2px 17px darkgray');

	});
	$('#infotab').mouseleave(function(){
      	
		  /*$('#infotab a').animate({
           		fontSize: '-=5px'
       		});*/
		$('#infotab a').css("text-shadow", '2px 2px 17px black');
	});	

	// Now bring up content
		  //Send title and buttons to top of screen	
/*	 $('#buttons').click(function() {
			$('#titlebox').css('margin', '0 150px'); 	
			$('#titlebox').css('position','absolute');
			$('#titlebox').css('top','0px');
			$('#buttons').css('margin', '50px 150px');
			$('#buttons').css('position','absolute');
			$('#buttons').css('top','50px')*/
			/*$('#buttons').css('background-color',' #3d63b8 ')*/
//		});
	 	 //menu
	$('#menutab').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#menubox').fadeIn('slow');
		$('.item').hide();
		$('#item1').fadeIn('slow');
		$('#menul1').css('color','black');
		$('form').hide();
	});
		
		//infolink
	$('#infolink').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#infobox').fadeIn('slow');
		
	
	});
	  	// return to just picture 
	$('#titlebox').click(function() {
		$('.contentbox').fadeOut('fast');
  		$('.item').hide();
	 	$('form').hide();
	 /*	$('#buttons').css('top','440px');
		$('#buttons').css('margin-top','12px');
		$('#buttons').css('position','relative');
	 	$('#titlebox').css('margin-top','350px'); 		
	 	$('#titlbox').css('position','relative');*/

  });
			//event info
	$('#infotab').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#infobox').fadeIn('slow');
		
	});

			//our story 
    $('#ourstorytab').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#ourstorybox').fadeIn('slow');
		$('.slideshow').cycle('stop');
		// fix additive dotbox bug

		// start slide show with every click
		$('.slideshow').cycle({
			fx: 'fade',
			     	// choose your transition type, ex: fade, scrollUp, shuffle, etc...
			pager:'#dotbox',
			next: '.slideshow',
			pause: 1,
			timeout:4000

		});

	});
			// menu link in "Click here to preorder on "event info"
 	$('#menulink').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#menubox').fadeIn('slow');
		$('.item').hide();
		$('#item1').fadeIn('slow');
		$('#menul1').css('color','black');
 		$('form').hide();	
	});
	$('#infolink').click(function() {
		$('.contentbox').fadeOut('fast');
		$('#infobox').fadeIn('slow');
		$('.item').hide();
		$('form').hide();	
	});
	
	// INTERACTIVE MENU
	$('.menulist').mouseenter(function() {
		$('.menulist').css('color','white');
      	$(this).css('color','black');
		$('#item6').hide();
		
  	});
   	$('.menulist').mouseleave(function() {
      	$(this).css('color','white');
  	});

	
	$('#menul2').mouseenter(function() {
      	 	 $('#item2').fadeIn('slow');
		 
		
  	});
   	$('#menul2').mouseleave(function() {
      		 $('#item2').fadeOut('slow');
		  
  	});
	 
	$('#menul1').mouseenter(function() {
      		 $('#item1').fadeIn('slow');
		  
  	});
   	$('#menul1').mouseleave(function(){
      		 $('#item1').fadeOut('fast');
	});
	$('#menul4').mouseenter(function(){
      	          $('#item4').fadeIn('slow');
		
  	});
   	$('#menul4').mouseleave(function(){
      		 $('#item4').fadeOut('fast');
		
  	});
	$('#menul3').mouseenter(function(){
      		 $('#item3').fadeIn('slow');
		  
  	});
   	$('#menul3').mouseleave(function(){
      		 $('#item3').fadeOut('fast');
	});
	
	$('#menul5').mouseenter(function(){
      		 $('#item5').fadeIn('slow');
		  
  	});
   	$('#menul5').mouseleave(function(){
      		 $('#item5').fadeOut('fast');
	});
	
	 $('#menul7').mouseenter(function(){
      		 $('#item7').fadeIn('slow');
		  
  	});
   	$('#menul7').mouseleave(function(){
      		 $('#item7').fadeOut('fast');
	});
	
	 $('#menul8').mouseenter(function(){
      		 $('#item8').fadeIn('slow');
		  
  	});
   	$('#menul8').mouseleave(function(){
      		 $('#item8').fadeOut('fast');
	});
	
	 $('#menul9').mouseenter(function(){
      		 $('#item9').fadeIn('slow');
		  
  	});
   	$('#menul9').mouseleave(function(){
      		 $('#item9').fadeOut('fast');
	});
	
	 $('#menul10').mouseenter(function(){
      		 $('#item10').fadeIn('slow');
		  
  	});
   	$('#menul10').mouseleave(function(){
      		 $('#item10').fadeOut('fast');
	});
	 $('#menul11').mouseenter(function(){
      		 $('#item11').fadeIn('slow');
		  
  	});
   	$('#menul11').mouseleave(function(){
      		 $('#item11').fadeOut('fast');
	});
	  $('#menul12').mouseenter(function(){
      		 $('#item12').fadeIn('slow');
		  
  	});
   	$('#menul12').mouseleave(function(){
      		 $('#item12').fadeOut('fast');
	});
		//preorder
		//
		 	
		$('#menul6').mouseenter(function() {
      	  $(this).fadeTo('fast',.2);
      	  
		 
		
  	});
    $('#menul6').mouseleave(function() {
      		$(this).fadeTo('fast', 1);
      
  	});
   
		     // TOGGLE
	var first= true;// for toggle of preorder
	$('#menul6').click(function(){
	
		
   		if(first) {
   		   $('#menubox').animate({
   		   height:'+=195px'
   		   });
   		   
			 	 $('#menulist').animate({
					
					height: '+=200px' /*120px*/
				 });
				 $('#formbox').animate({
					
					/*top: '-=125px',*/
					height: '+=200px' /*125px*/
					
				 });
				 $('#menul6').fadeTo('fast',.2);
				 $('.menulist').css('color','white');
				 $('#item6').fadeIn('slow');
				 // also fade in when hover
				 
				 
				/* $('.item').css('top', '128px');*/
				 $('#menuitems').css('margin-top', '35px');
				/* $('.item').css('height', '402px');*/
				 $('#menutitle').css('text-align', 'center');
				 $('#menutitle').css('margin-right', '77px');
				 /*$('.foodimage').css('top', '68px');*/
				 $('#line').hide();
				 $('form').toggle(first);				 
        $('#menul6').mouseenter(function() {
      	      $('#item6').fadeIn('slow');
      	 });
 
				 first=false;
   			}
			 else {
			   $('#menul6').fadeTo('fast',1);
				 $('form').toggle(first);
				 $('#item6').fadeOut('slow');
				  $('#menubox').animate({
   		   height:'-=195px'
   		   });
				 $('#menulist').animate({
					height: '-=200px' /*120px*/
				 });
				 $('#formbox').animate({
				/*	top:   '+=125px',*/
					height: '-=200px' /*125px*/
				 });
			/*	 $('.item').css('top', '190px');*/
			  $('#menuitems').css('margin-top', '35px');
				/*$('.item').css('height', '302px');*/
				$('#menutitle').css('text-align', 'right');
				$('#line').show();
				$('#menutitle').css('margin-right', '143px');
			/*	$('.foodimage').css('top', '8px');*/
					
				
			 first=true;
			 }
		
	});
	// OUR STORY
		
	$('#dotbox a').mouseenter(function() {
      	          $('#dotbox a').animate({
					  height:'+=10px'
				  });
				
	});

   	$('#dotbox a').mouseleave(function() {
      		    $('#dotbox a').animate({
					  height:'-=10px'
				  });
   	});
	
				  
   
	//FOOTER effects

	 $('#footer').mouseenter(function(){
      		 $('#footer a').css('color', 'white');
		 $('#footer').animate({
           		height: '+=3px'
       		});

	 });
	  $('#footer').mouseleave(function(){
      		 $('#footer a').css('color', '#CCCCCC');
		  $('#footer').animate({
           		height: '-=3px'
       		});


	 });
});


