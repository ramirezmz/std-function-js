## FILTER

El objetivo de el método Filter es tener un arreglo filtrado, osea, solamente con los elementos que nosotros deseamos para poder trabajar en determinado momento.

- El método de filter recibe una función.
- Por lo cual podemos definir pequeñas funciones puras, las cuales podremos utilizar para poder componer nuestra función.

- El método filter nos va a mantener todos los elementos siempre y cuando la condición de la función esta nos devolva **TRUE**.

```
const numerosFiltrados = numeros.filter(x => x < 5)//TRUE
console.log(numerosFiltrados)
```

OBS: El arreglo **será mantenido** y esto lo que hace es: se **crea un nuevo arreglo** con la condición hecha y el cual será asignado para la constante _numerosFiltrados_

```
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const numerosFiltrados = numeros.filter(x => x < 5)//TRUE
console.log(numerosFiltrados, numeros)
```

- El método Filter nos puede crear un arreglo que va a tener la misma longitud o menor al arreglo el cual estamos ejecutando este método.
- Será una nueva cópia.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## Map

- En este ejercicio, tenemos una funcion que se llama suma, la cual irá sumar números que le pasemos.

- Luego tenemos también un array de numeros y de mascotas.

Comenzaremos con el de números.

1. Multipicar \* 2:
   Recordando que lo que haremos será que... "multiplicados" creará una nueva array a partir de números y devolverá como resultado de la funcion que esta dentro de map().

```
const multiplicados = numeros.map( x => x * 2 )
```

2. A pares de array:

`const parejas = numeros.map( x => [x, x])

`Vemos que tenemos una pareja de array dentro de un array, de esa forma podemos ver que el método map no solo es para crear métodos simples.

### Desafio:

Del array mascotas, devolver la edad promédio de las mismas.

Primeramente tenemos que transformar el array de mascotas en un array de números.

`const edades = mascotas.map( x => x.edad )

`Segundo, tenemos que sumar todos las edades.

`const suma = (ns) => { let acumulado = 0 for (i = 0; i < ns.length; i++) { acumulado += ns[1] } return }`

`const resultado = suma(edades)`

Y al final, debemos dividir el resultado con el número de elementos que hay en las edades.
`console.log( resultado / edades.length )`

