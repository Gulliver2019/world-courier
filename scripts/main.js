$(function() {

	if (!Modernizr.objectfit) {
		$('.image-object-fit').each(function () {
			var container = $(this);
			var imgUrl = container.find('img').prop('src');
			if (imgUrl) {
				container.css('backgroundImage', 'url(' + imgUrl + ')').addClass('compat-object-fit');
			}
		});
	}

});
