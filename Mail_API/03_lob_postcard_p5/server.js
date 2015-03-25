var fs = require('fs');

// You will need to install the lob module:
// npm install lob

// See further documentation here:
// https://lob.com/docs/node
// https://lob.com/docs/node#postcards
// https://github.com/lob/lob-node
var Lob = require('lob')('YOUR_API_KEY');


// You will also need to install servi
// npm install servi
var servi = require('servi');
var app = new servi(true);
port(3000);

// Set up routes.
serveFiles('public');
route('/sendDrawing', function(request) {
  var img = request.fields.img;
  var data = img.replace(/^data:image\/\w+;base64,/, "");
  var buf = new Buffer(data, 'base64');
  var f = 'images/'+Date.now()+'.png';
  fs.writeFileSync(f, buf);
  console.log('saved file');
  sendCard(f);
});

function sendCard(file) {
  Lob.postcards.create({
    from: {
      name: '',
      address_line1: c,
      address_city: '',
      address_state: '',
      address_zip: 11211,
      address_country: ''
    },
    to: {
      name: '',
      address_line1: '',
      address_city: '',
      address_state: '',
      address_zip: 11211,
      address_country: ''
    },
    front: '@'+file,
    message: 'hi there #testing',
    full_bleed: 1
  }, function (err, res) {
    console.log(err, res);
  });
}

// Start the server.
start();
