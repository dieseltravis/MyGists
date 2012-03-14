//https://gist.github.com/505715

var unique = function(thisArray) {
	var a = [];
	for (var l = thisArray.length; l--;) {
		if(a.indexOf(thisArray[l], 0) < 0) { 
			a.push(thisArray[l]); 
		}
	}
	return a;
};