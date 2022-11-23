function sumPairs(numbers, result) {
  // ¡Y no olvides compartir tu solución en redes!
  for (let i = 0; i < numbers.length; i++) {
    if (!numbers[i+1]) return null;
    let val = i + 1;
    while (val < numbers.length) {
      const sum = numbers[i] + numbers[val];
      if (sum === result) {
        const arr = [numbers[i], numbers[val]];
        return arr;
      }
			val++;
    }
  }
  return null;
}