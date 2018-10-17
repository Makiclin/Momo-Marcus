$(document).ready(function(){

	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 200 );
	});

	$('#button-4').click(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-5').click(function() {
		$(this).next('.item').toggleClass('circle');
	});



	$('#button-8').click(function() {
		$('.item').css({
			'border-radius' : '200px',
		});
	});

	$('#button-13').click(function() {
		$('.item').toggleClass('changeWidth');
	});

	$('#button-14').click(function() {
		$('.item').toggleClass('changeHeight');
	});

	$('#button-15').click(function() {
		$('.item').toggleClass('hide');
	});

	$('#button-16').click(function() {
		$('.item').toggleClass('black');
	});

	$('#button-19').click(function() {
		$(this).next('.item').addClass('launch');
	});

	$('#button-20').click(function() {
		$(this).prev('.item').addClass('launch');
	});

	$('#button-21').click(function() {
		$('body').css({
			'background-color' : 'white',
		});

		$('.item').css({
			'background' : 'black',
		});

	});


	// check when the mouse moves
	$('#button-25').mousemove(function(e){

		// update mouse x and y position
		var xPos = e.pageX-125;
		var yPos = e.pageY-125;

		$(this).css({
			'position' : 'absolute',
			'top' :  yPos+'px',
			'left' :  xPos+'px',
		});
	});

});
