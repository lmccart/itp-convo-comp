// You will need to install the lob module:
// npm install lob

// See further documentation here:
// https://lob.com/docs/node
// https://lob.com/docs/node#postcards
// https://github.com/lob/lob-node

var Lob = require('lob')('YOUR_API_KEY');

var fs = require('fs');
fs.readFile(__dirname + '/front.html', 'utf8', function(err, front_html){
  if (err) console.log(err);
  fs.readFile(__dirname + '/back.html', 'utf8', function(err, back_html){
    if (err) console.log(err);
    else sendCard(front_html, back_html);
  });
});

function sendCard(front_html, back_html) {
  Lob.postcards.create({
    name: 'demo postcard job',
    from: {
      name: '',
      address_line1: '',
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
    front: front_html,
    back: back_html
  }, function (err, res) {
    console.log(err, res);
  });
}