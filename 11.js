function shouldBuyFidelity(times) {
	if (times === 0) return false;
	const percentaje = 0.75;
	const initialAmount = 250;
	const ticketValue = 12;
	const noDiscount = ticketValue * times;
	let accumulatedDiscount = 0;
	let val = times;
	while (val > 0) {
		const discount = Math.pow(percentaje, val);
		accumulatedDiscount = accumulatedDiscount + ticketValue * discount;
		val--;
	}
	const totalFidelity = accumulatedDiscount + initialAmount;
	return totalFidelity < noDiscount;
}