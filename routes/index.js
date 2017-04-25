const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', {tweets: tweets, showForm: true});
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {tweets: list, showForm: false} );
});
router.get('/tweets/:id',function(req, res){
  var id = +req.params.id;
  var list = tweetBank.find( {uniqueID: id} );
  res.render( 'index', {tweets: list, showForm: false} );
});

router.post('/tweets', function(req, res) {
	console.log(req.body.name)
	var name = req.body.name;
	var text = req.body.text;
	tweetBank.add(name, text);
	res.redirect('/');
});


module.exports = router;

