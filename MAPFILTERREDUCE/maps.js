const dollars = ["32$", "15$", "12$", "17$", "20$"];

// Map

// Forma boomer
let prices = [];
for (let i = 0; i < dollars.length; i++) {
  prices[i] = Number(dollars[i].slice(0, dollars[i].length - 1));
}

// Forma zoomer
prices = [];
for (const dollar of dollars) {
  prices.push(Number(dollar.slice(0, dollar.length - 1)));
}

// Forma atualizada
prices = dollars.map((dollar) => Number(dollar.slice(0, dollar.length - 1)));

console.log(prices);

// Filter
// Old version to do
let expensive = [];
for (const price of prices) {
  if (price >= 20) {
    expensive.push(price);
  }
}

// New version
expensive = prices.filter((price) => price >= 20);

// Reduce
let sum = 0;
for (price of expensive) {
  sum += expensive;
}

sum = expensive.reduce((acum, price) => acum + price);

console.log(sum);
