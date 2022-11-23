function createXmasTree(height) {
	let strAnswer = '';
	for (let i = 1; i <= height; i++) {
		let underScores = '';
		let alt = height;
		let stars = '';
		while (alt > i) {
			underScores = underScores + '_';
			alt--;
		}
		let amount = 2;
		stars = '*';
		while (amount <= i) {
			stars = stars + '*' + '*';
			amount++
		}
		strAnswer = strAnswer + underScores + stars + underScores + '\n'
	}
	let heightN = height;
	let underscores = '';
	while (heightN > 1) {
		underscores = underscores + '_';
		heightN--;
	}
	let firstTrunk = underscores + '#' + underscores + '\n';
	let secondTrunk = underscores + '#' + underscores;
	strAnswer = strAnswer + firstTrunk + secondTrunk;
	return strAnswer;
}