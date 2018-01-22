let { JobsPosition, Department, Employee } = require("./model");
let {ObjectId} = require('mongodb');

let {
	GraphQLString,
	GraphQLObjectType,
	GraphQLNonNull,
} = require("graphql");

let { JobsPositionType, DepartmentType, EmployeeType} = require("./objects");
let { DepartmentCreateType, DepartmentUpdateType, DepartmentDeleteType, JobsPositionCreateType } = require("./inputs")

// Build GraphQL Mutation

const CompanyMutationType = new GraphQLObjectType({
	name: 'CompanyMutations',
	description: "Company Schema Mutations",
	fields: {
		createDepartment: {
		  	 type: DepartmentType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (DepartmentCreateType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);

		  	 	var newItem = new Department({
		  	 		name: input.name,
		  	 		description: input.description
		  	 	});

		  	 	newItem.save();

		  	 	return newItem;
		  	 }
	  	},	
	  	updateDepartment: {
		  	 type: DepartmentType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (DepartmentUpdateType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);

		  	 	var item = Department.findById( input.id );
		  	 	item.name = input.name;
		  	 	item.description = input.description;

		  	 	item.save();

		  	 	return item;
		  	 }
	  	},
	  	deleteDepartment: {
		  	 type: DepartmentType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (DepartmentDeleteType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);
		  	 	
		  	 	Department.findByIdAndRemove( input.id, function(err, row){
		  	 		console.log(err);
		  	 		console.log(row);
		  	 	});
		  	 	
	  	 		return { id: 1 }
		  	 }	
	  	},		
	  	createJobsPosition: {
		  	 type: JobsPositionType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (JobsPositionCreateType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);

		  	 	var newItem = new JobsPosition({
		  	 		name: input.name,
		  	 		description: input.description
		  	 	});

		  	 	newItem.save();

		  	 	return newItem;
		  	 }
	  	},
	}
});


module.exports = {
	CompanyMutationType: CompanyMutationType
};
