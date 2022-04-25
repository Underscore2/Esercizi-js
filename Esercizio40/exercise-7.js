class Person {
  constructor(firstName, lastName) {
    this.FirstName = firstName;
    this.LastName = lastName;
  }

  get firstName() {
    return this.FirstName
  }

  set firstName(param) {
    this.FirstName = param;
  }

  get lastName() {
    return this.LastName
  }

  set lastName(param) {
    this.LastName = param;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);