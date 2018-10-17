$(document).ready(function(){
	
	$('#button-3').click(function() {
		$(this).animate({
			opacity: 0.4,
			marginTop: '280px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 400 );
		$(this).animate({
			opacity: 0.4,
			marginLeft: '280px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 400 );
		$(this).toggleClass('circle');
	});

	$('#button-1').hover(function() {
		$(this).toggleClass('circle');
	});
	$('#button-2').hover(function() {
		$(this).animate({
			opacity: 0.4,
		}, 400 );
		$(this).toggleClass('halfround');
	});
	$('#button-4').hover(function() {
		$(this).toggleClass('gradient-background');
	});

	$('#button-5').click(function() {
		$(this).next('.item').toggleClass('circletwo');
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
		})
	});
	$('#button-9').click(function() {
	$(this).animate({
			opacity: 0.4,
			marginTop: '550px',
			fontSize: '24px',
			borderWidth: '10px'
		}, 400 );
	$(this).toggleClass('circle');
	$(this).next('.item').toggleClass('color');
	});

	var button14= true;
    $('#button-14').click(function(){
        
        if (button14==true) {
            $('#button-14').css("border", "groove");
            $('#button-14').css("border-color", "chocolate");
            $('#button-14').css("border-width", "70px");
            $('#button-14').css("height", "210px");
            $('#button-14').css("font-size", "20px");
            $('#button-14').css("color", "rgba(94,61,32,0.5)");
            button14=false;
        }
        else {
            $('#button-14').css("border", "none");
            $('#button-14').css("font-size", "200px");
            $('#button-14').css("color", "black");
            button14=true;
        }
    });
    var button15= false; 
	$('#button-15').click(function() {

		if (button15==true){
			$('#button-16').animate({
			opacity: 0.4,
			marginTop: '350px',
			}, 100 );
			button15=false;
		}

		else {
			$('#button-16').animate({
			opacity: 1,
			marginTop: '0px',
			}, 100 );
			button15=true;
		}
	});
	$('#button-16').click(function() {

    	$('#button-17').each(function(index) {
      	var colorR = Math.floor((Math.random() * 256));
      	var colorG = Math.floor((Math.random() * 256));
      	var colorB = Math.floor((Math.random() * 256));
      	$(this).css("background-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    	});
  });

	
	$( '#button-18' ).click(function() {
  		alert( 'OMG! I am ran out of hover ideas when I got here.' ); 
	});

	$(function(){

    $(window).scroll(function(){
      var scrolled = $(window).scrollTop();
      if (scrolled > 200) $('.go-top').fadeIn('slow');
      if (scrolled < 200) $('.go-top').fadeOut('slow');
    });
  
    $('#button-19').click(function () {
      $("html, body").animate({ scrollTop: "0" },  500);
    });

    $('#button-20').click(function(){
       window.close();
   	});
var button21= true;
	$('#button-21').click(function() {
		if (button21==true) {
    	 	$(".item").css("transform", "rotate(-180deg)");
    	 	button21=false;
    	}
		else {
            $(".item").css("transform", "rotate(0deg)");
            button21=true;
        }
	});
	var button22= true;
	$('#button-22').click(function() {
		if (button22==true) {
    	 	$("#button-22").css("filter", "grayscale(100%)");
    	 	button22=false;
    	}
		else {
            $("#button-22").css("filter", "grayscale(0%)");
            button22=true;
        }
	});    


  });






});