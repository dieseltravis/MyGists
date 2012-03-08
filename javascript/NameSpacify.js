//https://gist.github.com/1832198
var NameSpacify = function( namespace, base ) {
	var names = namespace.split('.'),
		space = base || {};

	for (var i = 0, l = names.length; i < l; i++) {
		space = space[names[i]] = space[names[i]] || {};
	}
};

//NameSpacify("newer.name.space", $);
// $.newer.name.space is now an object