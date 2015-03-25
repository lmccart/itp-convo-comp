// You will need to install the lob and node-restclient modules:
// npm install lob
// npm install node-restclient

// See further documentation here:
// https://lob.com/docs/node
// https://lob.com/docs/node#postcards
// https://github.com/lob/lob-node

var Lob = require('lob')('YOUR_LOB_KEY');

var restclient = require('node-restclient');
var wordnik_key = 'YOUR_WORDNIK_KEY';
var getAdvsURL =  'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'hasDictionaryDef=true&includePartOfSpeech=adverb&limit=1&' + 
                  'minCorpusCount=300&api_key='+wordnik_key;


function sendCard() {
  restclient.get(getAdvsURL, function(data) {
    data = JSON.parse(data);

    var phrase = 'I love you '+data[0].word+'.';

    Lob.postcards.create({
      name: 'demo postcard job',
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
      front: '<html style="margin: 130px; font-size: 50;">'+phrase+'</html>',
      back: '<html style="margin: 130px; font-size: 50;">xo lauren</html>',
      template: 1
    }, function (err, res) {
      console.log(err, res);
    });

  });

}

setTimeout(sendCard, 1000*60*60*24); // once a day

