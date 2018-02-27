$(function(){
//setting for sidebar
$('.hide').hide();
$('#show').show();
});

$('.pure-menu > ul > li > a').click(function() {

  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    checkElement.slideUp('fast');
	$(".nano").nanoScroller();
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('.pure-menu ul ul:visible').slideUp('fast');
    checkElement.slideDown('fast');
  }
 		
});


//setting for inner scroll
$('.nano').nanoScroller({
    preventPageScrolling: true
  });

//setting for switch between main content into gallery
$( "#button-gallery" ).click(function() {
	$('#main').fadeOut(1500);
	$('.callbacks_container').delay(1500).fadeIn(3500);
        $('#slider4').delay(1500).fadeIn(2500);

    });

$( ".button-return" ).click(function() {
	setTimeout(function(){
		$('.callbacks_container').fadeOut(2500, function(){
			$('#main').delay(2500).fadeIn(2500);
			$(".nano").nanoScroller({ scroll: 'top' });
$('#slider4').fadeOut(2500);
		});
	},2500);
});
