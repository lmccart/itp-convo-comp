// http://www.alchemyapi.com/api/sentiment/proc.html

var http = require('http');

//Create the AlchemyAPI object
var AlchemyAPI = require('./alchemyapi');
var alchemyapi = new AlchemyAPI();


var demo_text = 'Yesterday dumb Bob destroyed my fancy iPhone in beautiful Denver, Colorado. I guess I will have to head over to the Apple Store and buy a new one.';
var demo_url = 'http://www.npr.org/2013/11/26/247336038/dont-stuff-the-turkey-and-other-tips-from-americas-test-kitchen';
var demo_html = '<html><head><title>Node.js Demo | AlchemyAPI</title></head><body><h1>Did you know that AlchemyAPI works on HTML?</h1><p>Well, you do now.</p></body></html>';


http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');

  // Find and classify entities in text
  alchemyapi.entities('text', demo_text,{ 'sentiment':1 }, function(response) {
    res.end(JSON.stringify(response['entities']));
  });

  // alchemyapi.entities('url', demo_url,{ 'sentiment':1 }, function(response) {
  //   res.end(JSON.stringify(response['entities']));
  // });

  // // Determine overall sentiment of text
  // alchemyapi.sentiment('html', demo_html, {}, function(response) {
  //   res.end(JSON.stringify(response['docSentiment']));
  // });
  
}).listen(3000);
console.log('Server running at 3000');

