const listaNumeros = [45, 9, 18, 7, 6, 100, 2];
const listaNumeros2 = [49, 9, 29, 6, 4, 101, 2];

function ordenarLista(array) {
  let tamanho = array.length
  for(let i = 0; i < tamanho - 1; i++) {

    for(let x = 0; x < tamanho - i - 1; x++) {
      if(array[x] > array[x + 1]){
        let rpda = array[x]
        array[x] = array[x + 1]
        array[x + 1] = rpda
      }
    }
  }
  console.log(array)
}

ordenarLista(listaNumeros)