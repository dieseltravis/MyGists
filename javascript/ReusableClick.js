//https://gist.github.com/507683

var pretendClick = function (event) {
	//TODO: clean this up, test for other keys that shouldn't trigger clicks (arrows, etc):
	if (event && ((event.which && event.which != 9) || (event.keyCode && event.keyCode != 9))) {
		$(this).click();
	}
};

// Example: 
$("a").click(function () {
	// some click function
}).keypress(pretendClick);