// Install twit node module: npm install twit
// Install restclient node module: npm install node-restclient
// Install markov module: npm install markov

// twit module docs: https://github.com/ttezel/twit
// Twitter developer info: https://dev.twitter.com/
// Twitter app keys: https://apps.twitter.com/

// Markov module docs https://github.com/substack/node-markov

var markov = require('markov');
var restclient = require('node-restclient');


var Twit = require('twit');

// Set up Twitter credentials
var T = new Twit({
  consumer_key:         'TWITTER_CONSUMER_KEY', 
  consumer_secret:      'TWITTER_CONSUMER_SECRET',
  access_token:         'TWITTER_ACCESS_TOKEN',
  access_token_secret:  'TWITTER_ACCESS_TOKEN_SECRET'
});


var max_id = 1;
var m = markov(3);

createCorpus();

function createCorpus() {
  T.get('statuses/user_timeline', {screen_name:'laurmccarthy', count:100}, function(e, r) {
    var corpus = '';
    for (var i=0; i<r.length; i++) {
      corpus += r[i].text+' ';
    }

    var words = corpus.split(' ');
    corpus = words.filter(function(w) {
      return w.indexOf('@') == -1 && w.indexOf('http') == -1;
    }).join(' ');

    m.seed(corpus, function () {
      // setTimeout(runResponder, 5000);
      runResponder();
    });
  });
}


function runResponder() {
  T.get('statuses/mentions_timeline', {count:1, since_id:max_id}, function (e,r) {
    if (r) {
      for(var i=0;i<r.length;i++) {
        console.log(r[i].text);
        if (r[i].id > max_id) {
          max_id = r[i].id;
          respondToTweet(r[i]);
        }
      }
    }
  });
}

function respondToTweet(t) {
  var text = t.text;
  text.replace('@laurmccarthy', '');
  var res = m.respond(text, 5).join(' ');

  var user = t.user.screen_name;
  var tweet = '@'+user +' '+ res;
  // T.post('statuses/update', { status: tweet}, function(err, reply) {
  //   if (err) console.log('error: ' + err);
  //   else console.log('reply: ' + reply);
  // });
  console.log('TWEEET::::: '+tweet);
}


