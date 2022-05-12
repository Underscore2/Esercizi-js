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

const jobs = [
  {
    id: 1,
    jobTitle: 'CEO'
  },
  {
    id: 2,
    jobTitle: 'Project Manager'
  },
  {
    id: 3,
    jobTitle: 'Developer'
  }
];
fetchPersonById = function (id) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      const person = persons.find((item) => item.id == id);
      if (person) {
        resolve(person)
      }
      else {
        reject(new Error("GNA"))
      }
    }
    )
  }, 1500)
}
fetchJobById = function (id) {
  setTimeout(() => {
    return new Promise((resolve, reject) => {
      const job = jobs.find((item) => item.id == id);
      if (job) {
        resolve(job)
      }
      else {
        reject(new Error("GNA"))
      }
    }
    )
  }, 1500)
}
Promise.all(
  [


    fetchPersonById(2),


    fetchJobById(2)



  ]


).then((resolve) => console.log(resolve)
).catch((error) => console.log(error.message))
// core here