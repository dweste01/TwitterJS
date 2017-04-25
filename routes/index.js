const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res, next) {
  let tweets = tweetBank.list();
  res.render( 'index', {tweets: tweets});
});

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var list = tweetBank.find( {name: name} );
  res.render( 'index', {tweets: list} );
});
router.get('/tweets/:id',function(req, res){
  var id = +req.params.id;
  var list = tweetBank.find( {uniqueID: id} );
  res.render( 'index', {tweets: list} );
});
module.exports = router;

