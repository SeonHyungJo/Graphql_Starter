import { people, getById, getAll } from "./db"

const resolver = {
  Query: {
    people: () => {
      let result = getAll()
      return result
    },
    person: (_, { id }) => getById(id)
  }
}

export default resolver
