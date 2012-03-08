//https://gist.github.com/779203
if (window.navigator.standalone !== void(0)) {
	$(window).load(function() {
		if (!this.navigator.standalone) {
			this.setTimeout(function() { this.scrollTo(this.scrollX, this.scrollY + 1); }, 500);
		}
	});
}

/* HTML:
<!-- http://developer.apple.com/library/safari/#documentation/appleapplications/reference/SafariHTMLRef/Articles/MetaTags.html -->
<!-- *Note: these only work when it is saved to the home screen -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
*/