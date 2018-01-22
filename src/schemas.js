let {
	GraphQLSchema,
} = require("graphql");

let { CompanyQueryType } = require("./queries");
let { CompanyMutationType } = require("./mutations");

// Built App Schema

const CompanyAppSchema = new GraphQLSchema({
  query: CompanyQueryType,
  mutation: CompanyMutationType,
});

module.exports = CompanyAppSchema;

