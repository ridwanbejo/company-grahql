
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

const JobsPositionUpdateType = new GraphQLInputObjectType({
	name: "JobsPositionUpdateType",
	type: JobsPositionType,
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

const JobsPositionDeleteType = new GraphQLInputObjectType({
	name: "JobsPositionDeleteType",
	type: JobsPositionType,
	fields: {
		id: {
			type: new GraphQLNonNull(GraphQLString)
		}
	}
});

const EmployeeCreateType = new GraphQLInputObjectType({
	name: "EmployeeCreateType",
	type: EmployeeType,
	fields: {
		
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		email: {
			type: GraphQLString
		},
		gender: {
			type: GraphQLString
		},
		address: {
			type: GraphQLString
		},
		jobsPosition: {
			type: new GraphQLNonNull(GraphQLString)
		},
		department: {
			type: new GraphQLNonNull(GraphQLString)
		}
	
	}
});

const EmployeeUpdateType = new GraphQLInputObjectType({
	name: "EmployeeCreateType",
	type: EmployeeType,
	fields: {
		
		id : {
			type: new GraphQLNonNull(GraphQLString)
		},
		name: {
			type: new GraphQLNonNull(GraphQLString)
		},
		email: {
			type: GraphQLString
		},
		gender: {
			type: GraphQLString
		},
		address: {
			type: GraphQLString
		},
		jobsPosition: {
			type: new GraphQLNonNull(GraphQLString)
		},
		department: {
			type: new GraphQLNonNull(GraphQLString)
		}
	
	}
});

const EmployeeDeleteType = new GraphQLInputObjectType({
	name: "EmployeeCreateType",
	type: EmployeeType,
	fields: {
		
		id : {
			type: new GraphQLNonNull(GraphQLString)
		},
	
	}
});


module.exports = {
	DepartmentCreateType: DepartmentCreateType,
	DepartmentUpdateType: DepartmentUpdateType,
	DepartmentDeleteType: DepartmentDeleteType,
	JobsPositionCreateType: JobsPositionCreateType,
	JobsPositionUpdateType: JobsPositionUpdateType,
	JobsPositionDeleteType: JobsPositionDeleteType,
	EmployeeCreateType: EmployeeCreateType,
	EmployeeUpdateType: EmployeeUpdateType,
	EmployeeDeleteType: EmployeeDeleteType,
};
