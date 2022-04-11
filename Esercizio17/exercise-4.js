function calculate() {
  let ris = 0;
  return {

    add(num) {
      ris += num;
      return this;
    },
    multiply(num) {
      ris *= num;
      return this;

    },

    sub(num) {
      ris -= num;
      return this;
    },
    divide(num) {

      ris /= num;
      return this;
    },

    printResult() {
      console.log(ris);
    }
  }

}


const calculator = calculate(5);
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7
