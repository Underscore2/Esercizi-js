class Person {
  constructor(id, firstName, lastName, age) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  toJson() {
    return JSON.stringify(this);
  }

  static fromJson(param) {
    let { id, firstName, lastName, age } = param;

    return new Person(id, firstName, lastName, age)
  }
}


const json = '{"id":1,"firstName":"Mario","lastName":"Rossi","age":25}';
developer = Person.fromJson(json)
console.log(developer instanceof Person)

