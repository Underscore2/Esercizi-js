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

  fromJson(param) {
    return JSON.parse(param);
  }
}

const json = new Person(1, "Mario", "Rossi", 25);
let developer = json.toJson();
developer = json.fromJson(developer);
console.log(developer)
