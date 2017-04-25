/** modules to require **/
const http = require("http");
const express = require('express');
const tweetBank = require('./tweetBank');
const volleyball = require('volleyball');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const app = express();

/** Rendering View **/
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', { noCache: true });
app.use(volleyball);

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};

var specialLocals = {
    title: 'A Special Example',
    people: [
        { name: 'Super Gandalf'},
        { name: 'Amazing Frodo' },
        { name: 'Heroic Hermione'}
    ]
};

nunjucks.render('index.html',locals,function(err,output){
	if(err)throw err;
	console.log(output);
});


/** Request/Response handling **/
app.listen(3000, function() {
	console.log('listening!');
});

// app.get('/', function(req, res, next) {
// 	res.render( 'index.html', locals);
// })

// // has to be exact match on '/special/'
// app.get('/special/', function(req, res, next) {
// 	res.render( 'index.html', specialLocals);
// })


app.use('/', routes);

