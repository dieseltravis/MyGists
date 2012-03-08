//https://gist.github.com/645372
//http://www.phpied.com/preload-then-execute/

var PreExe = function(file, callback) {
	var o = document.createElement('object');
	o.data = file;

	o.width  = 0;
	o.height = 0;

	o.onload = function() {
		var s = document.createElement('script');
		s.src = file;
		s.onload = function() {
			callback(o, file);
		};
		document.getElementsByTagName('head')[0].appendChild(s);
	};

	document.body.appendChild(o);
};