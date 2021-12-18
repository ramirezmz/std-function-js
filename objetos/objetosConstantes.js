// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }
Object.freeze(pessoa)

pessoa.nome = 'Amanda'
pessoa.endereco = 'Rua calixto fernandes das Neves'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'Roberto' })

console.log(pessoaConstante)