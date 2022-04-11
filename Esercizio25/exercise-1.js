const person = {
  firstname: "",
  lastname: "",
  get firstName() {
    return this.firstname
  },

  set firstName(value) {
    this.firstname = value;
  },

  get lastName() {
    return this.lastname
  },

  set lastName(value) {
    this.lastname = value;
  },

  get fullName() {
    return `Fullname: ${this.firstname} ${this.lastname}`
  }


}

/* const john = Object.create(person) */
const simon = Object.create(person);

const john = Object.create(person);

simon.firstName = "Simon";
simon.lastName = "Collins";

john.firstName = "John";
john.lastName = "Doe";






console.log(john.fullName); // John Doe
console.log(simon.fullName); // Simon Collins
