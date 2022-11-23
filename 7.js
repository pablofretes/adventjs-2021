function contains(store, product) {
	// ¡Y no olvides compartir tu solución en redes!
	let mapProds = {};
	const keys = Object.keys(store);
	for (const element of keys) {
		if (store[element] === product) return true;
		if (store[element] !== null && typeof store[element] == "object" && !Array.isArray(store[element])) {
			traverse(store[element], mapProds);
		}
	}
	return product in mapProds;
}

const traverse = (object, mapProds) => {
	if (object !== null && typeof object == "object" && !Array.isArray(object)) {
		return Object.entries(object).forEach(([key, value]) => {
			traverse(value, mapProds);
		});
	} else {
		if (!(object in mapProds)) {
			mapProds[object] = object;
		}
	}
}