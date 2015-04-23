// You will need to get a google api key
// https://developers.google.com/maps/documentation/geocoding/#api_key

// You will need to install the node-geocoder module:
// https://github.com/nchaulet/node-geocoder
// npm install node-geocoder

// You will need to install the lob module:
// npm install lob

// See further documentation here:
// https://lob.com/docs/node
// https://lob.com/docs/node#postcards
// https://github.com/lob/lob-node

var geocoderProvider = 'google';
var httpAdapter = 'https';
var extra = {
    apiKey: 'YOUR_GOOGLE_API_SERVER_KEY',
    formatter: null
};

var geocoder = require('node-geocoder')(geocoderProvider, httpAdapter, extra);
var Lob = require('lob')('YOUR_LOB_KEY');


var n = 'Jane Smith';
var a = '330 Havermeyer St #2a Brooklyn';

mailCard(n, a);

function mailCard(name, address) {

  geocoder.geocode(address, function(err, res) {
      console.log(res);

      var comma0 = res[0].formattedAddress.indexOf(',');
      var a_line1 = res[0].formattedAddress.substring(0, comma0);
      var comma1 = res[0].formattedAddress.indexOf(',', comma0+1);
      var a_city = res[0].formattedAddress.substring(comma0+2, comma1);
      var a_state = res[0].stateCode;
      var a_zip = res[0].zipcode;
      var a_country = res[0].countryCode;

      console.log(a_line1, a_city, a_state, a_zip, a_country);

      Lob.postcards.create({
        name: 'demo postcard job',
        from: {
          name: '',
          address_line1: '',
          address_city: '',
          address_state: '',
          address_zip: 99999,
          address_country: 'US'
        },
        to: {
          name: name,
          address_line1: a_line1,
          address_city: a_city,
          address_state: a_state,
          address_zip: a_zip,
          address_country: a_country
        },
        front: '<html style="margin: 130px; font-size: 50;">FRONT HTML</html>',
        back: '<html style="margin: 130px; font-size: 50;">Back HTML</html>',
        template: 1
      }, function (err, res) {
        console.log(err, res);
      });
  });


}


