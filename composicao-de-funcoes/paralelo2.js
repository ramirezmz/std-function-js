function externa(nome) {
   return function interna(idade){
      return `Olá, meu nome é ${nome} e minha idade é ${idade}`
   }
}
const robertoFunc = externa('Roberto')
const pedrinhoFunc = externa('Pedro')

console.log(robertoFunc(23))
console.log(pedrinhoFunc(1))