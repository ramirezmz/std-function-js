class Livro {
   constructor(nome, editora, paginas) {
      this.nome = nome
      this.editora = editora
      this.paginas = paginas
   }
   anunciarTitulo() {
      console.log(`Titulo: ${this.nome}`)
   }
   descreverTitulo() {
      console.log(`${this.nome} é um livro da editora ${this.editora} e tem ${this.paginas} páginas`)
   }
}

const NodeJS = new Livro("RobertoPaolo", "Familia Ramirezzz", 300)
NodeJS.anunciarTitulo()
NodeJS.descreverTitulo()
console.log(NodeJS)
