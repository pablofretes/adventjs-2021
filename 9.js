function groupBy(collection, it) {
	const itType = typeof it;
	const result = {};
	if (itType === 'function') {
		for (const element of collection) {
			const value = it(element);
			if (!(value in result)) {
				result[value] = [element];
			} else {
				result[value].push(element);
			}
		}
	} else {
		for (const element of collection) {
			const value = element[it];
			if (!(value in result)) {
				result[value] = [element];
			} else {
				result[value].push(element);
			}
		}
	}
	return result;
}