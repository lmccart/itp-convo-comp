// Install twit node module: npm install twit
// Install restclient node module: npm install node-restclient

// twit module docs: https://github.com/ttezel/twit
// Twitter developer info: https://dev.twitter.com/
// Twitter app keys: https://apps.twitter.com/

// Wordnik API docs http://developer.wordnik.com/docs.html

var restclient = require('node-restclient');

var Twit = require('twit');

// Set up Twitter credentials
var T = new Twit({
  consumer_key:         'TWITTER_CONSUMER_KEY', 
  consumer_secret:      'TWITTER_CONSUMER_SECRET',
  access_token:         'TWITTER_ACCESS_TOKEN',
  access_token_secret:  'TWITTER_ACCESS_TOKEN_SECRET'
});


var wordnik_key = 'WORDNIK_API_KEY';


// setInterval would tweet every N milliseconds
// setInterval(createTweet, 5000);
createTweet();

function createTweet() {

  var getAdjsURL =  'http://api.wordnik.com/v4/words.json/randomWords?' +
                    'hasDictionaryDef=true&includePartOfSpeech=adjective&limit=2&' + 
                    'minCorpusCount=300&api_key='+wordnik_key;

  restclient.get(getAdjsURL,
    function(data) {
      data = JSON.parse(data);
      //console.log(data[0].word)
      var tweet = 'I am feeling '+data[0].word+' and '+data[1].word+' right now.';   
      console.log(tweet);
      T.post('statuses/update', { status: tweet}, function(err, reply) {
        if (err) console.log('error: ' + err);
        else console.log('reply: ' + reply);
      });
    }
  );
}
