//https://gist.github.com/765308
// Bookmarklet:
//javascript:(function(){var l=top.location;top.location=l.href.split(/&?r=/)[0]+(l.search?'&':'?')+'r='+Math.random();})();
(function() {
	var l = top.location;
	top.location = l.href.split(/&?r=/)[0] + (l.search ? '&' : '?') + 'r=' + Math.random();
})();