function selectBestDiscount(price, offers) {
  let best = null;
  let bestPrice = price;

  for (const offer of offers) {
    if (price < offer.minPrice) continue;

    let finalPrice;
    if (offer.type === "flat") {
      finalPrice = price - offer.value;
    } else if (offer.type === "percent") {
      finalPrice = price - price * (offer.value / 100);
    } else {
      continue;
    }

    finalPrice = Math.max(0, finalPrice);

    if (finalPrice < bestPrice) {
      bestPrice = finalPrice;
      best = offer;
    }
  }

  return best;
}

console.log(selectBestDiscount(100, [
  { name: "FLAT15", type: "flat", value: 15, minPrice: 50 },
  { name: "HALF", type: "percent", value: 50, minPrice: 150 }
]));

console.log(selectBestDiscount(200, [
  { name: "SAVE20", type: "flat", value: 20, minPrice: 100 },
  { name: "25PERCENT", type: "percent", value: 25, minPrice: 150 }
]));

console.log(selectBestDiscount(100, []));

console.log(selectBestDiscount(100, [
  { name: "BIG", type: "flat", value: 10, minPrice: 500 }
]));

console.log(selectBestDiscount(100, [
  { name: "ZERO", type: "flat", value: 0, minPrice: 0 }
]));

console.log(selectBestDiscount(100, [
  { name: "A", type: "flat", value: 20, minPrice: 0 },
  { name: "B", type: "percent", value: 20, minPrice: 0 }
]));

console.log(selectBestDiscount(50, [
  { name: "HUGE", type: "flat", value: 1000, minPrice: 0 }
]));