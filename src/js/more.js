$(function(){

	$('.gecko .project_btn').css({
		visibility: "hidden"
	});

	$('.fleche_top').on('click', function() {
		$('html, body').animate({
			scrollTop: $('#pageTop').offset().top
		}, 1200);
	});

});
