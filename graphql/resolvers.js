import { people, getById } from "./db"

const resolver = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id)
  }
}

export default resolver
