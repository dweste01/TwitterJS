const http = require("http");

const express = require('express');
const app = express();




// var server = http.createServer(app);

app.listen(3000, function() {
	console.log('listening!');

});

app.use('/', function(req, res, next) {
	console.log(req.method, req.originalUrl, res.statusCode);
	res.send("Welcome to twitter");
	next();
})

app.use('/special/', function(req, res, next) {
	console.log("in the special route");
})
