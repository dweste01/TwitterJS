const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const app = express();


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  // console.log(tweets);
  // var context = {
  // 	title: "Our tweets",
  // 	tweetArray: tweets
  // }
  res.render( 'index', {tweets: tweets});
});

app.use('./public', express.static('stylesheets'));

module.exports = router;