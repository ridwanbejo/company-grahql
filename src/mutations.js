let { JobsPosition, Department, Employee } = require("./model");
let {ObjectId} = require('mongodb');

let {
	GraphQLString,
	GraphQLObjectType,
	GraphQLNonNull,
} = require("graphql");

let { JobsPositionType, DepartmentType, EmployeeType} = require("./objects");
let { DepartmentCreateType, DepartmentUpdateType, DepartmentDeleteType, 
		JobsPositionCreateType, JobsPositionUpdateType, JobsPositionDeleteType, 
		EmployeeCreateType, EmployeeUpdateType, EmployeeDeleteType, 
	} = require("./inputs")

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

		  	 	var item = Department.findByIdAndUpdate( input.id, {
		  	 		name: input.name,
		  	 		description: input.description
		  	 	});

		  	 	return input;
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
	  	updateJobsPosition: {
		  	 type: JobsPositionType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (JobsPositionUpdateType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);

		  	 	var item = JobsPosition.findByIdAndUpdate( input.id, {
		  	 		name: input.name,
		  	 		description: input.description
		  	 	});

		  	 	return input;
		  	 }
	  	},
	  	deleteJobsPosition: {
		  	 type: JobsPositionType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (JobsPositionDeleteType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);
		  	 	
		  	 	JobsPosition.findByIdAndRemove( input.id, function(err, row){
		  	 		console.log(err);
		  	 		console.log(row);
		  	 	});
		  	 	
	  	 		return { id: 1 }
		  	 }	
	  	},	
	  	createEmployee: {
		  	 type: EmployeeType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (EmployeeCreateType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);

		  	 	var newItem = new Employee({
		  	 		name: input.name,
		  	 		email: input.email,
		  	 		gender: input.gender,
		  	 		address: input.gender,
		  	 		jobsPosition: input.jobsPosition,
		  	 		department: input.department
		  	 	});

		  	 	newItem.save();

		  	 	return newItem;
		  	 }
	  	},
	  	updateEmployee: {
		  	 type: EmployeeType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (EmployeeUpdateType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);

		  	 	var item = Employee.findByIdAndUpdate( input.id, {
		  	 		name: input.name,
		  	 		email: input.email,
		  	 		gender: input.gender,
		  	 		address: input.gender,
		  	 		jobsPosition: input.jobsPosition,
		  	 		department: input.department
		  	 	});

		  	 	return input;
		  	 }
	  	},
	  	deleteEmployee: {
		  	 type: EmployeeType,
		  	 args: {
		  	 	input: { type: new GraphQLNonNull (EmployeeDeleteType) }
		  	 },
		  	 resolve: (source, { input }) => {
		  	 	console.log(input);
		  	 	
		  	 	Employee.findByIdAndRemove( input.id, function(err, row){
		  	 		console.log(err);
		  	 		console.log(row);
		  	 	});
		  	 	
	  	 		return { id: 1 }
		  	 }	
	  	},	
	}
});


module.exports = {
	CompanyMutationType: CompanyMutationType
};
