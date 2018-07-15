import { people, getById, getById2 } from "./db"

const resolver = {
  Query: {
    people: () => {
      let result = getById()
      return result
    },
    person: (_, { id }) => getById2(id)
  }
}

export default resolver
