const http = require("http");
const express = require('express');
const app = express();
const router = express.Router();
const tweetBank = require('./tweetBank');

const volleyball = require('volleyball')

const nunjucks = require('nunjucks')
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });




var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

nunjucks.render('index.html',locals,function(err,output){
	if(err)throw err;
	console.log(output);
});


app.use(volleyball);
// var server = http.createServer(app);

app.listen(3000, function() {
	console.log('listening!');

});

router.get('/', function(req, res, next) {
	//console.log(req);
	console.log(req.method, req.originalUrl, res.statusCode);
	res.render( 'index.html', locals);

	// res.send("Welcome to twitter");
	next();
})

router.get('/special/', function(req, res, next) {
	console.log("in the special route");
	res.send("Welcome to special twitter :)");
})

app.use('/',router);
