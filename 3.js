function isValid(letter) {
  if (!letter.includes('(') || !letter.includes(')')) return false;
  const indexOfOpeningParenthesis = letter.indexOf('(');
  if (letter[indexOfOpeningParenthesis + 1] === ')') return false;
  let gift = '';
  for (const element of letter) {
    if (element === '(') {
      gift = element;
      continue;
    }
    if (element === ')') {
      gift = gift + element;
      break;
    }
    if (gift.length === 0) continue;
    gift = gift + element;
  }
  if (
		gift.includes('{') ||
		gift.includes('}') ||
		gift.includes('[') ||
		gift.includes(']') ||
		gift.length < 3
	) {
		return false;
	}
  return true;
}