const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}

for (let i = 0; i < Object.keys(person).length; i++) {
  console.log(`${Object.keys(person)[i]} ${Object.values(person)[i]}`)
}
