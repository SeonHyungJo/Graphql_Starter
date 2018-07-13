export const people = [
  {
    id: 0,
    name: "sseon",
    age: 26,
    gender: "male"
  },
  {
    id: 1,
    name: "1",
    age: 12,
    gender: "male"
  },
  {
    id: 2,
    name: "2",
    age: 11,
    gender: "male"
  },
  {
    id: 3,
    name: "3",
    age: 6,
    gender: "male"
  },
  {
    id: 4,
    name: "4",
    age: 2,
    gender: "male"
  }
]

export const getById = id => {
  const filteredPeople = people.filter(person => id === person.id)
  return filteredPeople[0]
}