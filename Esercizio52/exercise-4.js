const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

for (element in person) {
  if (typeof (person[element]) === 'string') {

    person[element] = undefined;
  }
}




const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 } */