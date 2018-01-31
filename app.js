var { graphql, buildSchema } = require("graphql");
var express = require('express');
var graphqlHTTP = require('express-graphql');
var jwt = require("jsonwebtoken"); 
var exJwt = require("express-jwt");
var bodyParser = require("body-parser");

const schema = require("./src/schemas.js");

var app = express();
var router = express.Router();

var secretToken = "secret12345";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'application/graphql' }));

router.get('/hello', function(req, res){
	res.send("Hello World!");
});

router.post('/auth-token', function(req, res){
	console.log(req.body);
	if (req.body.username == "admin" && req.body.password == "secret12345")
	{
		var token = jwt.sign({
			username: req.body.username,
			role: ["admin"]
		}, secretToken, {});
		res.json({token: token});
	}
	else
	{
		res.json({msg: "Unknown Account!"});
	}
	
});

app.use ("/", router);

app.use('/graphql', exJwt({secret: secretToken}), graphqlHTTP({
	schema: schema,
	graphiql: true
}));

app.listen(3000);
console.log('Running a GraphQL API server at localhost:3000/graphql');