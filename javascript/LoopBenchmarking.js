//https://gist.github.com/1671179
var StandardLoop = function (arrayToProcess, processorFunction) {
		for (var i = 0, l = arrayToProcess.length; i < l; i++) {
			processorFunction(arrayToProcess[i]);
		}
	},
	ReverseLoop = function (arrayToProcess, processorFunction) {
		for (var i = arrayToProcess.length; i--;) {
			processorFunction(arrayToProcess[i]);
		}
	},
	DuffIt = function (arrayToProcess, processorFunction) {
		var iterations = Math.floor(arrayToProcess.length / 8),
			leftover = arrayToProcess.length % 8,
			i = 0;

		if (leftover > 0){
			do {
				processorFunction(arrayToProcess[i++]);
			} while (--leftover > 0);
		}

		do {
			processorFunction(arrayToProcess[i++]);
			processorFunction(arrayToProcess[i++]);
			processorFunction(arrayToProcess[i++]);
			processorFunction(arrayToProcess[i++]);
			processorFunction(arrayToProcess[i++]);
			processorFunction(arrayToProcess[i++]);
			processorFunction(arrayToProcess[i++]);
			processorFunction(arrayToProcess[i++]);
		} while (--iterations > 0);
	};


// example
var someHugeArray = ['a', 'b', 'c', /*...*/ 'xxxx', 'yyyy', 'zzzz'],
	someFunFunction = function (itemToProcess) {
		// do stuff with itemToProcess from someHugeArray
	};

StandardLoop(someHugeArray, someFunFunction);
ReverseLoop(someHugeArray, someFunFunction);
DuffIt(someHugeArray, someFunFunction);
// call array processors, benchmark them to see which is faster for your array