// class é praticamente o mesmo que uma função
function Carro(velocidadeMax = 200, delta = 5){
  // atributo privado
  let velocidadeAtual = 0

  //metodo público
  this.acelerar = function(){
    if(velocidadeAtual + delta <= velocidadeMax) {
      velocidadeAtual += delta
    } else {
      velocidadeAtual = velocidadeMax
    }
  }
  // Metodo público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual
  }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

// class = molde

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())