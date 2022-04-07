const listaNumeros = [45, 9, 18, 7, 6, 100, 2];

function ordenacaoSelecao(vetor) {
  let n = vetor.length;

  for (let i = 0; i < n - 1; i++) {
    //Encontra o menor item da parte não ordenada
    let min_idx = i;
    
    for (let j = i + 1; j < n; j++)
      if (vetor[j] < vetor[min_idx])
        min_idx = j;
    //Troca o menor com o primeiro elemento
    let temp = vetor[min_idx];
    vetor[min_idx] = vetor[i];
    vetor[i] = temp;
  }
  // console.log(vetor);
}
ordenacaoSelecao(listaNumeros)