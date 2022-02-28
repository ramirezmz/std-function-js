// función reducer
// const reducer = (acumulador, valorActural) => nuevoAcumulador
// const reducido = [1, 2].reduce((acc, el) => acc + el, 0)
// console.log(reducido)

const numeros = [1, 2, 3, 4, 5]
// SUMA DE TODOS LOS ELEMENTOS DE UN ARRAY
const resultado = numeros.reduce((acc, el) => acc + el, 0)
// console.log(resultado)

const mascotas = [
   { nombre: "Puchini", edad: 12, tipo: "perro" },
   { nombre: "Chanchito feliz", edad: 3, tipo: "perro" },
   { nombre: "Pulga", edad: 10, tipo: "perro" },
   { nombre: "Pelusa", edad: 16, tipo: "gato" },
 ];

const indexed = mascotas.reduce((acc, el) => ({
   ...acc,
   [el.nombre]: el,
}), {})

// console.log(indexed['Puchini'])

 const anidado = [1, [2, 3], 4, [5]]
 const plano = anidado.reduce((acc, el) => acc.concat(el), [] )
 console.log(plano)