export default function getCoins(change) {
	const coinsMap = {
		'1': 0,
		'2': 0,
		'5': 0,
		'10': 0,
		'20': 0,
		'50': 0,
	};
	let value = change;
	if (value >= 50) {
		value = changeCalculator(value, 50, coinsMap);
	}
	if (value >= 20) {
		value = changeCalculator(value, 20, coinsMap);
	}
	if (value >= 10) {
		value = changeCalculator(value, 10, coinsMap);
	}
	if (value >= 5) {
		value = changeCalculator(value, 5, coinsMap);
	}
	if (value >= 2) {
		value = changeCalculator(value, 2, coinsMap);
	}
	if (value >= 1) {
		changeCalculator(value, 1, coinsMap);
	}
	return Object.values(coinsMap);
}

const changeCalculator = (change, targetValue, coinsMap) => {
	let val = change;
	let times = Math.floor(val / targetValue);
	val = val - (targetValue * times);
	while (times > 0) {
		coinsMap[targetValue]++;
		times--;
	}
	return val;
}