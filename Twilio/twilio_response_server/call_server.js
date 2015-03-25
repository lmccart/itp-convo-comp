// node-twilio docs: http://twilio.github.io/twilio-node/
// TwiML xml response format docs: https://www.twilio.com/docs/api/twiml 

// npm install twilio
var twilio = require('twilio');

// npm install express
// setup express app
var express = require('express');
var app = express();
app.set('port', process.env.PORT || 3000);
var server = require('http').Server(app);
server.listen(app.get('port'));


app.get('/', function(req, res) {
  res.send('ok');
});

// set up routes
app.get('/hello', function(req, res) {

  var twiml = new twilio.TwimlResponse();
  twiml.say('Welcome to automated emotion management service!');
  twiml.gather({
    action:'/feeling',
    method:'GET',
    timeout:'10',
    numDigits:'1'
  }, function() {
    this.say('Press 1 if you are feeling good.');
    this.say('Press 2 if you are feeling bad.');
  });

  res.type('text/xml');
  res.send(twiml.toString());
});

app.get('/feeling', function(req, res) {
  var digit = req.query.Digits;

  var twiml = new twilio.TwimlResponse();
  if (digit == '1') {
    twiml.say('I am glad to hear that.');
  } else if (digit == '2') {
    twiml.say('I am sorry to hear that.');
  } else {
    twiml.say('Say what?');
  }

  res.type('text/xml');
  res.send(twiml.toString());

});

