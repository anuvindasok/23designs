// hamburger menu

  	$(document).ready(function(){
  		$(".icon").click(function(){
  			$(this).toggleClass("open")
  		})
  	});


 // show and hide navigation


 $(document).ready(function(){
    $(".icon").click(function(){
        $(".sub-navigation").toggle(1000);
    });
});


 // hide and show skills

 $(document).ready(function(){
    $("#hide").click(function(){
        $(".second-about").hide(1000);
    });
    $("#show").click(function(){
        $(".second-about").show(1000);
    });
});