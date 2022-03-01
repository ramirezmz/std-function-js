const gritar = (x) => x.toUpperCase();
const exclamar = (x) => `${x}!!!`;
const perguntar = (x) => `${x}???`;
const esticar = (x) =>
  x
    .split("")
    .reduce((final, letter) => final + `${letter}${letter}${letter}`)
    .replace(/\s+/g, " ");
// console.log(exclamar(gritar('paolo')))

const compor = (...funcoes) => {
  return function (text) {
    let resultado = text;
    for (let funcao of funcoes) {
      resultado = funcao(resultado);
    }
    return resultado;
  };
};
// const resultado = compor(gritar, exclamar, 'bom dia')
// console.log(resultado)
const exagerarMenos = compor(gritar, exclamar);
const exagerar = compor(gritar, perguntar, exclamar);
const exagerarMais = compor(gritar, perguntar, exclamar, esticar);
console.log(exagerarMenos("bom dia"));
console.log(exagerar("boa tarde"));
console.log(exagerarMais("boa noite"));
