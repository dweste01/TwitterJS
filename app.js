const http = require("http");

const express = require('express');
const app = express();

app.get('/', function(req, res) {
	res.send("Welcome to twitter");
})


// var server = http.createServer(app);

app.listen(3000, function() {
	console.log('listening!');
})