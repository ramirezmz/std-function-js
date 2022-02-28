## FILTER
El objetivo de el método Filter es tener un arreglo filtrado, osea, solamente con los elementos que nosotros deseamos para poder trabajar en determinado momento.

- El método de filter recibe una función.
- Por lo cual podemos definir pequeñas funciones puras, las cuales podremos utilizar para poder componer nuestra función.


- El método filter nos va a mantener todos los elementos siempre y cuando la condición de la función esta nos devolva **TRUE**.
```
const numerosFiltrados = numeros.filter(x => x < 5)//TRUE
console.log(numerosFiltrados)
```
OBS: El arreglo **será mantenido** y esto lo que hace es: se **crea un nuevo arreglo** con la condición hecha y el cual será asignado para la constante *numerosFiltrados*

```
const numeros = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
const numerosFiltrados = numeros.filter(x => x < 5)//TRUE
console.log(numerosFiltrados, numeros)
```

- El método Filter nos puede crear un arreglo que va a tener la misma longitud o menor al arreglo el cual estamos ejecutando este método.
- Será una nueva cópia.
 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter