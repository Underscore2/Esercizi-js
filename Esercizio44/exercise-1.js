let num1 = 10;
let num2 = 20;
console.log('Before swap: ', num1, num2); // Before swap: 10 20

/* [num1, num2] = (`${num2} ${num1}`).split(" ") */ //METODO BRUTTO

[num1, num2] = [num2, num1]; // METODO BELLO
// Variable swapping
/* let temp = num2;
num2 = num1;
num1 = temp; */

console.log('After swap: ', num1, num2); // After swap: 20 10