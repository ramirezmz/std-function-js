function externa() {
   function interna() {
      return 'Olá sou a função interna!'
   }
   return interna
}
const fn = externa()
console.log(fn())


