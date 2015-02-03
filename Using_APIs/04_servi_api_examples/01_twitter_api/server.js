// You will need to install the twit npm module
// npm install twit
// https://github.com/ttezel/twit
// https://dev.twitter.com/rest/public


var servi = require('servi');

var app = new servi(true);

var Twit = require('twit');

var twit = new Twit({
    consumer_key: 'NnHFuspeyuQqKK3yex3qLaGBF',
    consumer_secret: 'FiegwOPM5Xxjf0uItv0wujCmwfuZBuB8vpi5z1qpmWGt2SUyYr',
    access_token: '14381020-yEBlElWMiY3nm673NCFNo3081h4OveXkGwuAZ0xaA',
    access_token_secret: 'nppZ4utN9zmW205TN4PyGPPY10p9iT2Sz6kXrWoWG7MOw'
});

port(8080);

route('/', requestHandler);

function requestHandler(request) {

  twit.get('search/tweets', { q: 'banana since:2011-11-11', count: 100 }, function(err, data, response) {
    console.log(data)
  })

  request.respond("Hello World");

  
}

start();