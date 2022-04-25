function sum(...param) {
  return param.reduce((total, value) => total + value)
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));