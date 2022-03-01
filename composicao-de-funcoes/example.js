const gritar = (x) => x.toUpperCase();
const exclamar = (x) => `${x}!!!`;
const perguntar = (x) => `${x}???`;
const esticar = (x) =>
  x
    .split("")
    .reduce((final, letter) => final + `${letter}${letter}${letter}`)
    .replace(/\s+/g, " ");
const qtdDeLetras = (x) => x.length;
const triplo = (x) => x * 3;
// console.log(exclamar(gritar('paolo')))

const compor = (...funcoes) => {
  return function (text) {
    return funcoes.reduce((final, funcao) => {
      return funcao(final);
    }, text);
    //   let resultado = text;
    // for (let funcao of funcoes) {
    // resultado = funcao(resultado);
    // }
    // return resultado;
  };
};
// const resultado = compor(gritar, exclamar, 'bom dia')
// console.log(resultado)
const exagerarMenos = compor(gritar, exclamar);
const exagerar = compor(gritar, perguntar, exclamar);
const exagerarMais = compor(gritar, perguntar, exclamar, esticar);
const exagerarMaisLetras = compor(
  gritar,
  perguntar,
  exclamar,
  esticar,
  qtdDeLetras
);
const exagerarMaisLetrasTriplo = compor(
  gritar,
  perguntar,
  exclamar,
  esticar,
  qtdDeLetras,
  triplo
);
console.log(exagerarMenos("bom dia"));
console.log(exagerar("boa tarde"));
console.log(exagerarMais("boa noite"));
console.log(exagerarMaisLetras("boa noite"));
console.log(exagerarMaisLetrasTriplo("boa noite"));
