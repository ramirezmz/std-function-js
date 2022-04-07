const listaNumeros = [45, 9, 18, 7, 6, 100, 2];

function ordenacaoInsercao(vetor)
{
    let n = listaNumeros.length;
    for (let i=1; i<n; ++i)
    {
        let key = vetor[i];
        let j = i-1;
        //Move os elementos do vetor que são maiores que a chave para uma posição a frente 
        while (j>=0 && vetor[j] > key)
        {
            vetor[j+1] = vetor[j];
            j = j-1;
        }
        vetor[j+1] = key;
    }
    console.log(vetor);
}

ordenacaoInsercao(listaNumeros)

//https://www.mundojs.com.br/2018/02/05/algoritmos-de-ordenacao/