$(document).ready(function() {
	var menu_bar = $('.event');
	var menu_full = $('.mob');
	var wrap = $('.wrapper');

	menu_bar.click(function() {
		menu_full.fadeIn("slow");
		wrap.fadeOut("slow");
	});

	menu_full.click(function() {
		menu_full.fadeOut("slow");
		wrap.fadeIn("slow");
	});
});