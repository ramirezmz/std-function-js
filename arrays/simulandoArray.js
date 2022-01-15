const quaseArray = { 0: "Roberto", 1: "Amanda", 2: "Pedro" };
console.log(quaseArray);
// referenciamos o objeto atual com this
Object.defineProperty(quaseArray, "toString", {
  value: function () {
    return Object.values(this);
  },
  enumerable: false,
});
console.log(quaseArray[0]);

const meuArray = ["Roberto", "Amanda", "Pedro"];
console.log(quaseArray.toString(), meuArray);
