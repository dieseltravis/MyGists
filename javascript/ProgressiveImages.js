//https://gist.github.com/2039843
/*
HTML: (white-space and quotes in data attribute is important)
	<noscript data-image='{ "large": { "src": "http://placehold.it/640x480", "width": "640", "height": "480", "highdpisrc": "http://placehold.it/1280x960" }, "small": { "src": "http://placehold.it/320x240", "width": "320", "height": "240", "highdpisrc": "http://placehold.it/640x480" }, "alt": "test image" }'>
		<img src='http://placehold.it/160x120' width='160' height='120' alt='test image' />
	</noscript>
*/

$(function () {
	var selectedImage = ( $(window).width() >= 500 ) ? "large" : "small",
	    selectedSrc = ( window.devicePixelRatio >= 2 ) ? "highdpisrc" : "src";
	  
	$("noscript[data-image]").each(function () {
		var $image = $(this),
		    imageData = $image.data("image");
		  
		$('<img src="' + imageData[selectedImage][selectedSrc] + '" width="' + imageData[selectedImage].width + '" height="' + imageData[selectedImage].height + '" alt="' + imageData.alt + '" />').insertAfter($image);
	});
});
