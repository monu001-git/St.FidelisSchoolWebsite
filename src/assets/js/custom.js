
// MENU
$(document).ready(function(){
	 $('.overlay').hide();
	 
	   $('.btn-close').hide();
       $(".btn-open").click(function(){
       $(".overlay").fadeToggle(500);
	   $('.overlay').show();
	   $('.btn-close').show();	
	   $('.btn-open').hide();
       //$(this).toggleClass('btn-open').toggleClass('btn-close');
    });
	
	$('.btn-close').on('click', function(){
    $(".overlay").fadeToggle(500); 
    $('.btn-close').show();
    $('.overlay').hide();	
    $('.btn-close').hide();	   
    $('.btn-open').show();
	
    //$(".button span").toggleClass('btn-open').toggleClass('btn-close');
    //open = false;
});
});

$(document).ready(function(){
  // Add minus icon for collapse element which is open by default
  $(".collapse.in").each(function(){
    $(this).siblings(".panel-heading").find(".glyphicon").addClass("glyphicon-minus").removeClass("glyphicon-plus");
  });

  // Toggle plus minus icon on show hide of collapse element
  $(".collapse").on('show.bs.collapse', function(){
    $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
  }).on('hide.bs.collapse', function(){
    $(this).parent().find(".glyphicon").removeClass("glyphicon-minus").addClass("glyphicon-plus");
  });
});
//new WOW().init();

