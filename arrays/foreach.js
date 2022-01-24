const aprovados = ["Amanda", "Roberto", "Pedrinho", "Thor"];

aprovados.forEach(function (nome, indice) {
  console.log(`${indice + 1}) ${nome}`);
});
console.log("======================");
aprovados.forEach((nome, indice) => console.log(`${indice + 1}) ${nome}`));

console.log("======================");
const exibirAprovados = (aprovados) => console.log(aprovados);
aprovados.forEach(exibirAprovados);
