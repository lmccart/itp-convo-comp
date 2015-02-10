// Thanks to Darius Kazemi!
// See https://github.com/dariusk/metaphor-a-minute/blob/master/metaphor.js
// for a more developed example.

// Wordnik API docs http://developer.wordnik.com/docs.html

var restclient = require('node-restclient');

var wordnik_key = 'WORDNIK_API_KEY';

// insert your Wordnik API info below
var getNounsURL = 'http://api.wordnik.com/v4/words.json/randomWords?' +
                  'minCorpusCount=1000&minDictionaryCount=10&' +
                  'excludePartOfSpeech=proper-noun,proper-noun-plural,proper-noun-posessive,suffix,family-name,idiom,affix&' +
                  'hasDictionaryDef=true&includePartOfSpeech=noun&limit=20&maxLength=12&' +
                  'api_key='+wordnik_key;


restclient.get(getNounsURL,
  function(data) {
    console.log(data);
  }
);