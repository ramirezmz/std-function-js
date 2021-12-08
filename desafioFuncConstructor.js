function Pessoa(name) {
  this.name = name;

  this.speak = function () {
    console.log(`Meu nome é ${this.name}`);
  };
}

const p1 = new Pessoa("Pedro");
p1.speak();
