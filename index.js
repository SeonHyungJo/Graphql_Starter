var express = require('express');
var graphqlHTTP = require('express-graphql');
import resolvers from "./graphql/resolvers"
//const schema = require('./graphql/schema')
var { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

// import { GraphQLServer } from "graphql-yoga"
//import resolvers from "./graphql/resolvers"

// const server = new GraphQLServer({
//   typeDefs: "./graphql/schema.graphql",
//   resolvers
// })

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/graphql');

//server.start(() => console.log("Server is running on localhost:4000"))
//--------------------------------------
// connect To DB
// import models from "./models"
// models.sequelize.sync().then(function() {
//   server.start(() => console.log("Server is running on localhost:4000"))
// })
//--------------------------------------
