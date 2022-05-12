const persons = [
  {
    id: 1,
    firstName: 'Mario',
    lastName: 'Rossi',
    age: 25
  },
  {
    id: 2,
    firstName: 'Maria',
    lastName: 'Verdi',
    age: 32
  },
  {
    id: 3,
    firstName: 'Giovanni',
    lastName: 'Rossi',
    age: 35
  }
];

function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (persons.find((element) => element.id == id)) {
        resolve(persons.find((element) => element.id == id))
      } else {
        reject(new Error("Gnagnangangna"))
      }
    }, 1500)
  })
}

fetchPersonById(1)

  .then((resolve) => {
    console.log(resolve)
    return fetchPersonById(2)
  })
  .then((resolve) => {
    console.log(resolve)
    return fetchPersonById(3)

  })
  .then((resolve) => {
    console.log(resolve)
    return fetchPersonById(4)
  }).catch((reject) => {
    console.log(reject)
  })


// code here */



function promise() {

  return new Promise((resolve, reject) => {

    if (id === 5) {
      resolve(id);
    } else {
      reject(new Error('Non mi piace.'))

    }

  }).then((param) => {

    console.log(param)
  }).catch((param) => {
    console.log(param.message)
  })
}