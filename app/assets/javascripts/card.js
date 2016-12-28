$(document).ready(function() {
	var decoswap = $('#decoswap').css('background-image');
	var construction = $('#under-construction').css('background-image');
	$('#decoswap').hover(
		function() {
			$( this ).css("background-image", "");
			$('#decoswap-text').show();
		}, function() {
			$( this ).css("background-image", decoswap);
			$('#decoswap-text').hide();
	});
	$('#under-construction').hover(
		function() {
			$( this ).css("background-image", "");
			$('#construction-text').show();
		}, function() {
			$( this ).css("background-image", construction);
			$('#construction-text').hide();
	});
	
});