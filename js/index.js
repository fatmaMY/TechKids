$(document).ready(function() {
	imageCircle();
    // shadowCircle();
});

function imageCircle(){
	var image = $('img.circle');
	image
		.on('mouseover', function() {
			image.animate({
				borderRadius: '50%'
			}, 1000);
		})
		.on('mouseout', function() {
			image.animate({
				borderRadius: '1%'
			}, 1000);
		});

		
}

