function getName() {
  console.log(`Mi nombre es ${this.nick}`);
}

global.nick = "Roberto";

getName();
