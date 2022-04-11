function memoize(fn) {

  let cache = {};
  return (num) => {
    console.log(`\nNumero in controllo: ${num}\n`);
    if (num in cache) {
      return (`${num} e' già presente nel db, fattoriale: ${fn(num)}\n`)
    }
    else {
      cache[num] = fn(num);
      return (`${num}: ${fn(num)}`)
    }
  }

}


function factorial(x) {
  if (x === 0) {
    return 1;
  }
  let ris = 0;

  return x * factorial(x - 1);
}


const fattoriale = memoize(factorial);
console.log(fattoriale(10));
console.log(fattoriale(5));
console.log(fattoriale(6));
console.log(fattoriale(10));
console.log(fattoriale(5));
console.log(fattoriale(6));
console.log(fattoriale(10));
console.log(fattoriale(8));
console.log(fattoriale(3));
console.log(fattoriale(2));
