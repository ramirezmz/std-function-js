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

// Reduce
