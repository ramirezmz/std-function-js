# Classes

### Como funciona a criação de um método?
```javascript
const Livro = {
nome: "React Native",
editora: "Casa do Código",
paginas: 185,
anunciar: function() {
console.log("Roberto indica o livro " + this.nome + "!")
  }
}
Livro.anunciar()
```
- Dessa forma podemos chamar o método **anunciar** do objeto **Livro**.

Agora imaginemos que queremos criar um novo livro a partir desse objeto que acabamos de criar, pois acabamos de criar um objeto literal.

No seguinte exemplo, criamos praticamente um construtor, o qual esta realizando as tarefas com funções.
```javascript
const Livro = function(nome, editora, paginas) {
   gNome = nome,
   gEditora = editora,
   gPaginas = paginas
   
   this.getNome = function() {
      return gNome
   }
   this.getEditora = function() {
      return gEditora
   }
   this.getPaginas = function() {
      return gPaginas
   }
}
```


https://cursos.alura.com.br/extra/alura-mais/classes-e-funcoes-em-javascript-c300
