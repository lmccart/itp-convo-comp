// Adapted from Dan Shiffman's Programming from A to Z course
// https://github.com/shiffman/Programming-from-A-to-Z-F14


$(document).ready(function(){
  
  // indexOf returns the index of a particular string, or -1 if it is not found
  var sentence = 'The quick brown fox jumps over the lazy dog.';
  console.log(sentence.indexOf('quick'));
  console.log(sentence.indexOf('fo'));
  console.log(sentence.indexOf('The'));
  console.log(sentence.indexOf('blah blah'));

  // substring(start, stop) returns a substring
  var sentence = 'The quick brown fox jumps over the lazy dog.';
  var phrase = sentence.substring(4,9);
  console.log(phrase);

  // length gives you the total length of the string
  var sentence = 'The quick brown fox jumps over the lazy dog.';
  console.log(sentence.length);

  // you can the + operator to concatenate strings
  var num = 5 + 6;                        // ADDING TWO NUMBERS!
  var phrase = 'To be' + ' or not to be'; // JOINING TWO STRINGS!

  // split(delim) returns an array of strings split by the deliminator
  var words = sentence.split(" ");

  // toLowerCase and toUpperCase do just that
  var lowerSentence = sentence.toLowerCase();
  console.log(lowerSentence);
  var upperSentence = sentence.toUpperCase();
  console.log(upperSentence);
  
});