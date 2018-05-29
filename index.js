   $(document).ready(function(){ 
  
   $('.panel').hide();
  
  $(".accordion").click(function() {
   if ($(this).next().is(':visible')){
   
    $('.panel').slideUp();
	$(this).removeClass("fa fa-minus-square");
	$(this).addClass("fa fa-plus-square");
   }
   else
   {
   $('.panel').slideUp();
   	$('.accordion').removeClass("fa fa-minus-square");
	$('.accordion').addClass("fa fa-plus-square");
    $(this).next().slideDown();
	$(this).removeClass("fa fa-plus-square");
	$(this).addClass("fa fa-minus-square");
	}
  });
  
  });