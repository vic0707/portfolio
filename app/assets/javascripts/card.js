$(document).ready(function() {
	var image = $('#decoswap').css('background-image');
	$('#decoswap').hover(
		function() {
			$( this ).css("background-image", "");
			$('.project-text').show();
		}, function() {
			$( this ).css("background-image", image);
			$('.project-text').hide();
		});
});