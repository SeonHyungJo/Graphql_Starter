import { people, getById, getAll } from "./db"

const resolver = {
    people: () => {
      let result = getAll()
      return result
    },
    person: (_, { id }) => getById(id),
    hello: () => {
      return 'Hello world!';
    }
}

export default resolver
