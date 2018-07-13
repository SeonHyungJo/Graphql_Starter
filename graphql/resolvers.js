import { people, getById } from "./db"

const resolver = {
  Query: {
    people: () => {
      let result = getById()
      return result
    }
    //person: (_, { id }) => getById(id)
  }
}

export default resolver
