export function getDynamicPrice(basePrice: number): number {
  const today = new Date();
  const month = today.getMonth();
  const day = today.getDay();

  let multiplier = 1;

  // Weekend pricing (Friday, Saturday, Sunday)
  if (day === 5 || day === 6 || day === 0) {
    multiplier += 0.2; // 20% increase on weekends
  }

  // Peak seasons: Summer (April - May) or Winter Peak (December)
  if (month === 3 || month === 4 || month === 11) {
    multiplier += 0.15; // 15% increase in peak seasons
  }

  return Math.round((basePrice * multiplier) / 100) * 100;
}
