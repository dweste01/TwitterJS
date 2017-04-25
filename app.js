const http = require("http");

const express = require('express');
const volleyball = require('volleyball')
const app = express();
const router = express.Router();


app.use(volleyball);
// var server = http.createServer(app);

app.listen(3000, function() {
	console.log('listening!');

});

router.get('/', function(req, res, next) {
	//console.log(req);
	console.log(req.method, req.originalUrl, res.statusCode);
	res.send("Welcome to twitter");
	next();
})

router.get('/special/', function(req, res, next) {
	console.log("in the special route");
	res.send("Welcome to special twitter :)");
})

app.use('/',router);
