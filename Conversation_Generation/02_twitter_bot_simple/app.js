// Adapted from https://github.com/shiffman/Programming-from-A-to-Z-F14

// Install twit node module: npm install twit
// twit module docs: https://github.com/ttezel/twit

// Twitter developer info: https://dev.twitter.com/
// Twitter app keys: https://apps.twitter.com/

var Twit = require('twit');

// Set up Twitter credentials
var T = new Twit({
  consumer_key:         'TWITTER_CONSUMER_KEY', 
  consumer_secret:      'TWITTER_CONSUMER_KEY_SECRET',
  access_token:         'TWITTER_ACCESS_TOKEN',
  access_token_secret:  'TWITTER_ACCESS_TOKEN_SECRET'
});

// Create a test Tweet
var tweet =   'hello world';

// setInterval would tweet every N milliseconds
//setInterval(function() {
  T.post('statuses/update', { status: tweet}, function(err, reply) {
    if (err) console.log('error: ' + err);
    else console.log('reply: ' + reply);
  });
//},120000);