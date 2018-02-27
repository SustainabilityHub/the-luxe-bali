//change rate
$( "#en" ).click(function() {
	$('.container_id').fadeOut(2500);
	$('.container_en').delay(2600).fadeIn(5000);
	$('#id').removeClass('active');
	$('#en').addClass('active');
});
$( "#id" ).click(function() {
	$('.container_en').fadeOut(2500);
	$('.container_id').delay(2600).fadeIn(5000);
	$('#en').removeClass('active');
	$('#id').addClass('active');
});
//change pict at english rate
$( "#en1" ).click(function() {
	$('.en2').fadeOut(2500);
	$('.en3').fadeOut(2500);
	$('.en4').fadeOut(2500);
	$('.en1').delay(2600).fadeIn(5000);
	$('#en2').removeClass('active');
	$('#en3').removeClass('active');
	$('#en4').removeClass('active');
	$('#en1').addClass('active');
});
$( "#en2" ).click(function() {
	$('.en1').fadeOut(2500);
	$('.en3').fadeOut(2500);
	$('.en4').fadeOut(2500);
	$('.en2').delay(2500).fadeIn(5000);
	$('#en1').removeClass('active');
	$('#en3').removeClass('active');
	$('#en4').removeClass('active');
	$('#en2').addClass('active');
});
$( "#en3" ).click(function() {
	$('.en1').fadeOut(2500);
	$('.en2').fadeOut(2500);
	$('.en4').fadeOut(2500);
	$('.en3').delay(2500).fadeIn(5000);
	$('#en1').removeClass('active');
	$('#en2').removeClass('active');
	$('#en4').removeClass('active');
	$('#en3').addClass('active');
});
$( "#en4" ).click(function() {
	$('.en1').fadeOut(2500);
	$('.en2').fadeOut(2500);
	$('.en3').fadeOut(2500);
	$('.en4').delay(2500).fadeIn(5000);
	$('#en1').removeClass('active');
	$('#en2').removeClass('active');
	$('#en3').removeClass('active');
	$('#en4').addClass('active');
});
//change pict at indonesian rate
$( "#id1" ).click(function() {
	$('.id2').fadeOut(2500);
	$('.id3').fadeOut(2500);
	$('.id4').fadeOut(2500);
	$('.id1').delay(2500).fadeIn(5000);
	$('#id2').removeClass('active');
	$('#id3').removeClass('active');
	$('#id4').removeClass('active');
	$('#id1').addClass('active');
});
$( "#id2" ).click(function() {
	$('.id1').fadeOut(2500);
	$('.id3').fadeOut(2500);
	$('.id4').fadeOut(2500);
	$('.id2').delay(2500).fadeIn(5000);
	$('#id1').removeClass('active');
	$('#id3').removeClass('active');
	$('#id4').removeClass('active');
	$('#id2').addClass('active');
});
$( "#id3" ).click(function() {
	$('.id1').fadeOut(2500);
	$('.id2').fadeOut(2500);
	$('.id4').fadeOut(2500);
	$('.id3').delay(2500).fadeIn(5000);
	$('#id1').removeClass('active');
	$('#id2').removeClass('active');
	$('#id4').removeClass('active');
	$('#id3').addClass('active');
});
$( "#id4" ).click(function() {
	$('.id1').fadeOut(2500);
	$('.id2').fadeOut(2500);
	$('.id3').fadeOut(2500);
	$('.id4').delay(2500).fadeIn(5000);
	$('#id1').removeClass('active');
	$('#id2').removeClass('active');
	$('#id3').removeClass('active');
	$('#id4').addClass('active');
});

$( ".back-en" ).click(function() {
	$('#main').fadeOut(2500);
	$('.back-en').fadeOut(2500);
	$('#top').delay(2500).fadeIn(5000);
    $('.container_en').delay(2500).fadeIn(5000);
});

$( ".back-id" ).click(function() {
	$('#main').fadeOut(2500);
	$('.back-id').fadeOut(2500);
	$('#top').delay(2500).fadeIn(5000);
    $('.container_id').delay(2500).fadeIn(5000);
});

$( "#term-en" ).click(function() {
	setTimeout(function(){
		$('#top').fadeOut(2500);
		$('.container_en').fadeOut(2500, function(){
			$('#main').fadeIn(2500);
			$('.back-en').fadeIn(2500);
			$(".nano").nanoScroller({ scroll: 'top' });
		});
	},2500);
});
$( "#term-id" ).click(function() {
	setTimeout(function(){
		$('#top').fadeOut(2500);
		$('.container_id').fadeOut(2500, function(){
			$('#main').fadeIn(2500);
			$('.back-id').fadeIn(2500);
			$(".nano").nanoScroller({ scroll: 'top' });
		});
	},2500);
});

// floor-plans
$( "#f1" ).click(function() {
	$('.f2').fadeOut(1000);
	$('.f3').fadeOut(1000);
	$('.f4').fadeOut(1000);
	$('.f1').delay(1000).fadeIn(1000);
	$('#f2').removeClass('active');
	$('#f3').removeClass('active');
	$('#f4').removeClass('active');
	$('#f1').addClass('active');
});
$( "#f2" ).click(function() {
	$('.f1').fadeOut(1000);
	$('.f3').fadeOut(1000);
	$('.f4').fadeOut(1000);
	$('.f2').delay(1000).fadeIn(1000);
	$('#f1').removeClass('active');
	$('#f3').removeClass('active');
	$('#f4').removeClass('active');
	$('#f2').addClass('active');
});
$( "#f3" ).click(function() {
	$('.f1').fadeOut(1000);
	$('.f2').fadeOut(1000);
	$('.f4').fadeOut(1000);
	$('.f3').delay(1000).fadeIn(1000);
	$('#f1').removeClass('active');
	$('#f2').removeClass('active');
	$('#f4').removeClass('active');
	$('#f3').addClass('active');
});
$( "#f4" ).click(function() {
	$('.f1').fadeOut(1000);
	$('.f2').fadeOut(1000);
	$('.f3').fadeOut(1000);
	$('.f4').delay(1000).fadeIn(1000);
	$('#f1').removeClass('active');
	$('#fn2').removeClass('active');
	$('#f3').removeClass('active');
	$('#f4').addClass('active');
});
