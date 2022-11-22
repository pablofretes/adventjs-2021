export default function isValid(letter) {
  if (!letter.includes('(') || !letter.includes(')')) return false;
  const indexOfOpeningParenthesis = letter.indexOf('(');
  if (letter[indexOfOpeningParenthesis + 1] === ')') return false;
  let gift = '';
  for (let i = 0; i < letter.length; i++) {
    if (letter[i] === '(') {
      gift = letter[i];
      continue;
    }
    if (letter[i] === ')') {
      gift = gift + letter[i];
      break;
    }
    if (gift.length === 0) continue;
    gift = gift + letter[i];
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