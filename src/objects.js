let { JobsPosition, Department, Employee } = require("./model");

let {
	GraphQLString,
	GraphQLList,
	GraphQLObjectType,
	GraphQLNonNull,
} = require("graphql");

// Build GraphQL Types

const JobsPositionType = new GraphQLObjectType({
	name:"JobsPosition",
	description: "This is a jobs position type",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLString }
	})
});

const DepartmentType = new GraphQLObjectType({
	name:"Department",
	description: "This is a department type",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		description: { type: GraphQLString }
	})
});

const EmployeeType = new GraphQLObjectType({
	name:"Employee",
	description: "This is a employee type",
	fields: () => ({
		id: { type: new GraphQLNonNull(GraphQLString) },
		name: { type: new GraphQLNonNull(GraphQLString) },
		email: { type: new GraphQLNonNull(GraphQLString) },
		gender: { type: GraphQLString },
		address: { type: GraphQLString },
		jobsPosition: {
			type: JobsPositionType,
			resolve: function(item){

				if ( item.jobsPosition != null ){
					var result = JobsPosition.findById( item.jobsPosition );

					return result;
				}
			}
		},
		department: {
			type: DepartmentType,
			resolve: function(item){
				
				if ( item.department != null ){
					var result = Department.findById( item.department );

					return result;
				}
			}
		},
	})
});

module.exports = {
	JobsPositionType: JobsPositionType,
	DepartmentType: DepartmentType,
	EmployeeType: EmployeeType
};
