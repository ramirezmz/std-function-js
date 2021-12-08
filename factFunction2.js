function criarProduto(name, price){
  return {
    name,
    price,
    discount: 0.1
  }
}

console.log(criarProduto("Notebook", 2500.99))
console.log(criarProduto("iPad", 5000.99))
console.log(criarProduto("Kindle", 150.99))