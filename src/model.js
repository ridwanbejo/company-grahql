var mongoose = require("mongoose");

mongoose.connect("mongodb://sense-therapy:secret12345@192.168.99.100:32769/therapy");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var JobsPositionSchema = new Schema({
	name:  String,
	description: String
});

var DepartmentSchema = new Schema({
	name:  String,
	description: String
});

var EmployeeSchema = new Schema({
	name:  String,
	email: String,
	gender: String,
	address: String,
	jobsPosition: ObjectId,
	department: ObjectId
});

module.exports = { 
	JobsPosition: mongoose.model("JobsPosition", JobsPositionSchema), 
	Department: mongoose.model("Department", DepartmentSchema),
	Employee: mongoose.model("Employee", EmployeeSchema)
};