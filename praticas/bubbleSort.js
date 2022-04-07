const listaNumeros = [45, 9, 18, 7, 6, 100, 2];

function ordenacaoBolha(vetor) {
  let n = vetor.length;
  for (let i = 0; i < n - 1; i++)
    for (let j = 0; j < n - i - 1; j++)
      if (vetor[j] > vetor[j + 1]) {
        // troca temp and vetor[i]
        let temp = vetor[j];
        vetor[j] = vetor[j + 1];
        vetor[j + 1] = temp;
      }
  console.log(vetor);
}
ordenacaoBolha(listaNumeros)