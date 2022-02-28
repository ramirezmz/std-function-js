const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const mascotas = [
   { nombre: 'Puchini', edad: 12, raza: 'perro'},
   { nombre: 'Chanchito feliz', edad: 3, raza: 'perro'},
   { nombre: 'Pulga', edad: 10, raza: 'perro'},
   { nombre: 'Pelusa', edad: 16, raza: 'gato'}
];


const soloPerros = mascotas.filter( x => x.raza == 'perro')

console.log(soloPerros)
// const numerosFiltrados = numeros.filter(x => x < 5)//TRUE
// console.log(numerosFiltrados)