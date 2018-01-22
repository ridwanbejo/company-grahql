let { JobsPosition, Department, Employee } = require("./model");
let {ObjectId} = require('mongodb');

let {
	GraphQLString,
	GraphQLList,
	GraphQLObjectType,
	GraphQLNonNull,
} = require("graphql");

let { JobsPositionType, DepartmentType, EmployeeType} = require("./objects");

// Build GraphQL Root Queries

const CompanyQueryType = new GraphQLObjectType({
	name: 'CompanyQueries',
	description: "Company Schema Query Root",
	fields: () => ({
		jobsPositions: {
			type: new GraphQLList(JobsPositionType),
			description: "List of all Jobs Position",
			resolve: function () {		
				return JobsPosition.find({})
			}
		},
		departments: {
			type: new GraphQLList(DepartmentType),
			description: "List of all Department",
			resolve: function () {		
				return Department.find({})
			}
		},
		employees: {
			type: new GraphQLList(EmployeeType),
			description: "List of all Employee",
			resolve: function () {		
				return Employee.find({})
			}
		}
	})
});

module.exports = {
	CompanyQueryType: CompanyQueryType
};
