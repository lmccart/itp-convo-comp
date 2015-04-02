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
  var msg = req.query.Body.toLowerCase();

  var twiml = new twilio.TwimlResponse();
  
  if (msg == 'i feel good') {
    twiml.message('I am glad to hear that.');
  } else if (msg == 'i feel bad') {
    twiml.message('I am sorry to hear that.');
  } else {
    twiml.message('Say what?');
  }

  res.type('text/xml');
  res.send(twiml.toString());
});

