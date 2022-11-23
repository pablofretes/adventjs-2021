function maxProfit(prices) {
  // ¡Y no olvides compartir tu solución en redes!
  let profit = 0;
  for (let i = 0; i < prices.length; i++) {
    let val = i+1;
    while (val < prices.length) {
      const sum = (prices[i] - prices[val])*-1;
      if (sum > profit) profit = sum;
      val++;
    }
  }
  return profit <= 0 ? -1 : profit;
}