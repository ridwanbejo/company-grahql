var { graphql, buildSchema } = require("graphql");
var express = require('express');
var graphqlHTTP = require('express-graphql');
var jwt = require("express-jwt");

const schema = require("./src/schemas.js");

var app = express();

// jwt({secret: "secret12345"}),

app.use('/graphql',  graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(3000);
console.log('Running a GraphQL API server at localhost:3000/graphql');