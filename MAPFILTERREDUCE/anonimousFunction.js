function apply(num, f) {
  return f(num);
}

function double(num) {
  return 2 * num;
}

// console.log(apply(5, double));
// It's the same
console.log(
  apply(5, function (num) {
    return 2 * num;
  })
);
