function decodeNumbers(symbols) {
	let hash = {
		'.': 1,
		',': 5,
		':': 10,
		';': 50,
		'!': 100,
	}

	let splitSymbols = symbols.split('');
	let lastValue = 0;
	let completeValue = 0;

	for (let element of splitSymbols) {
		if (!(element in hash)) return NaN;
		if (hash[element] > lastValue) {
			completeValue = completeValue + hash[element] - lastValue - lastValue;
			lastValue = hash[element];
		} else {
			completeValue = completeValue + hash[element];
			lastValue = hash[element];
		}
	}

	return completeValue;
}