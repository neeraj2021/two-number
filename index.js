function add(a, b) {
  console.log("add", a, b);
  return a + b;
}

function substract(a, b) {
  console.log("substract", a, b);
  return a - b;
}

function multiply(a, b) {
  console.log("multiply", a, b);
  return a * b;
}

module.exports = {
  add,
  substract,
  multiply,
};
