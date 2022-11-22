export default function listGifts(letter) {
	const data = letter.split(' ').filter((word) => word !== '');
 const giftsMap = {};
 for (const gift of data) {
	 if (gift[0] === '_') continue;
	 if (!(gift in giftsMap)) {
		 giftsMap[gift] = 1;
	 } else {
		 giftsMap[gift]++
	 }
 }
 return giftsMap;
}