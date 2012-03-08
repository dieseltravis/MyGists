//https://gist.github.com/1855776
var
	// regex for finding/replacing keys, key name is in 1st group
	_keyFinder = /\{(\w+)\}/ig,

	// get the template string with values inserted
	GetFormattedString = function(templateString, valueObject) {
		return _templateString.replace(_keyFinder, function (subString, group1, offset, inputString) {
			return valueObject[group1];
		});
	};

// Example usage:
//GetFormattedString( "{a} is {b}", { a: "This", b: "cool!" } );
// "This is cool!"