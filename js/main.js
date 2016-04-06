$(document).ready(function() {
	$('.menuToggle').click(function (e) {
		$('body').toggleClass("menu-visible");
		e.preventDefault();
	});

	$('.close').click(function (e) {
		$('body').toggleClass("menu-visible");
		e.preventDefault();
	});

	$(window).scroll(function (event) {
	    if ($('body').hasClass('home')) {
		    var offset = $("#introduction").offset().top;
		    var scroll = $(window).scrollTop();
		    $header = $("#header");

		    if ((offset - 48) < scroll) {
		    	$header.removeClass('alt');
		    }

		    else {
		    	$header.addClass('alt');
		    }
	    }	    
	});

	$('a[href^="#introduction"]').click(function(){
		var the_id = $(this).attr("href");

		$('html, body').animate({
			scrollTop:$(the_id).offset().top
		}, 1000);
		return false;
	});
});