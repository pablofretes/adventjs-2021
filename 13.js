function wrapGifts(gifts) {
  // ¡No olvides compartir tu solución en redes!
	if (gifts.length === 0) return []
	const giftLength = gifts[0].length;
	const wallsLength = 2 + giftLength;
	let val = 1;
	let wall = '*';

	while (val < wallsLength) {
		wall = wall + '*';
		val++
	}

	const responseArr = [wall];
	for (const gift of gifts) {
		const wrappedGift = '*' + gift + '*';
		responseArr.push(wrappedGift);
	}
	responseArr.push(wall)

  return responseArr;
}

console.log(wrapGifts(["📷", "⚽️"]))