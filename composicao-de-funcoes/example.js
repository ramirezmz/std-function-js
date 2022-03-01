const gritar = x => x.toUpperCase()
const exclamar = x => `${x}!!!`
const perguntar = x => `${x}???`

// console.log(exclamar(gritar('paolo')))

const compor = (func1, func2, func3) => {
   return function(text){
      let resultado = func1(text)
      resultado = func2(resultado)
      resultado = func3(resultado)
      return resultado
   }
}
// const resultado = compor(gritar, exclamar, 'bom dia')
// console.log(resultado)
const exagerar = compor(gritar,perguntar, exclamar)
const resultado1 = exagerar('bom dia')
console.log(resultado1)
const resultado2 = exagerar('boa tarde')
console.log(resultado2)
