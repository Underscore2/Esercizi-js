function Person(firstName, lastName) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.fullName = function () {
        return `${firstName} ${lastName}`
    }
}

const john = new Person('John', 'Doe');
const simon = new Person('Simon', 'Collins');
console.log(john.fullName()); // John Doe
console.log(simon.fullName()); // Simon Collins
