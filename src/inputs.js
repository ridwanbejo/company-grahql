
let {
	GraphQLString,
	GraphQLObjectType,
	GraphQLNonNull,
	GraphQLInputObjectType
} = require("graphql");

let { JobsPositionType, DepartmentType, EmployeeType} = require("./objects");

// Build department mutation

const DepartmentCreateType = new GraphQLInputObjectType({
	name: "DepartmentCreateType",
	type: DepartmentType,
	fields: {
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		description: {
			type: GraphQLString
		}
	}
});

const DepartmentUpdateType = new GraphQLInputObjectType({
	name: "DepartmentUpdateType",
	type: DepartmentType,
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLString)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		description: {
			type: GraphQLString
		}
	}
});

const DepartmentDeleteType = new GraphQLInputObjectType({
	name: "DepartmentDeleteType",
	type: DepartmentType,
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLString)
		}
	}
});

// Build jobsPosition mutation

const JobsPositionCreateType = new GraphQLInputObjectType({
	name: "JobsPositionCreateType",
	type: JobsPositionType,
	fields: {
		
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		description: {
			type: GraphQLString
		}
	
	}
});

module.exports = {
	DepartmentCreateType: DepartmentCreateType,
	DepartmentUpdateType: DepartmentUpdateType,
	DepartmentDeleteType: DepartmentDeleteType,
	JobsPositionCreateType: JobsPositionCreateType
};
