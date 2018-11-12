  	$(window).on('scroll',function()  {
  		if($(window).scrollTop()){
  			$('header').addClass('color');
  		}
  		else{
  			$('header').removeClass('color');
  		}
  	})