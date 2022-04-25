/* function sum(num1, ...num2) {
    num2.forEach(element => (num1 += element));

    return num1;
}

console.log(sum(1, 2, 3, 4, 5)); */

function sum(...num2) {
    return num2.reduce((total, sum) => total + sum)
}

console.log(sum(1, 2, 3, 4, 5));

