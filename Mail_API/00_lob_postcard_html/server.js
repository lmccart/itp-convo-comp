// You will need to install the lob module:
// npm install lob

// See further documentation here:
// https://lob.com/docs/node
// https://lob.com/docs/node#postcards
// https://github.com/lob/lob-node

var Lob = require('lob')('YOUR_API_KEY');

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
  front: '<html style="margin: 130px; font-size: 50;">FRONT HTML</html>',
  back: '<html style="margin: 130px; font-size: 50;">Back HTML</html>'
}, function (err, res) {
  console.log(err, res);
});