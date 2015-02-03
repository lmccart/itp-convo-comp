var servi = require('servi');

var app = new servi(true);

port(8080);

route('/', requestHandler);

function requestHandler(request) {

  var url = 'http://api.openweathermap.org/data/2.5/weather?q=NewYork,USA';

  http.get(url, function(res) {
    var body = '';

    res.on('data', function(chunk) {
      body += chunk;
    });

    res.on('end', function() {
      var data = JSON.parse(body)
      console.log("Got response: ", data);
    });

  }).on('error', function(e) {
    console.log("Got error: ", e);
  });


  request.respond("Hello World");

  
}

start();