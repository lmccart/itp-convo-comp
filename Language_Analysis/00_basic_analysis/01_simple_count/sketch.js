// Adapted from Dan Shiffman's Programming from A to Z course
// https://github.com/shiffman/Programming-from-A-to-Z-F14

$(document).ready(function(){
    
  var text = "When he was in school he longed to be out, and when he was out he longed to be in. On the way he thought about coming home, and coming home he thought about going. Wherever he was he wished he were somewhere else, and when he got there he wondered why he'd bothered. Nothing really interested him — least of all the things that should have. It seems to me that almost everything is a waste of time, he remarked one day as he walked dejectedly home from school. I can't see the point in learning to solve useless problems, or subtracting turnips from turnips, or knowing where Ethiopia is or how to spell February. And, since no one bothered to explain otherwise, he regarded the process of seeking knowledge as the greatest waste of time of all.";

  // create a modified sentence
  //var words = text.split(' ');
  var words = text.split(/\W+/);
  console.log('The text contains '+words.length+' words.');

  var delimiters = /[.:;?!]/;
  var sentences = text.split(delimiters);
  console.log(sentences);
  console.log('The text contains '+sentences.length+' sentences.');

  // count the word "he"
  var count = 0;
  for (var i = 0; i < words.length; i++) {
    var lowerWord = words[i].toLowerCase();
    if (words[i] == 'he') {
      count++;
    }
  }
  console.log('The word he is used '+count+' times.');


  // search for a group of words
  count = 0;
  var personal_pronouns = ['i', 'me', 'you', 'he', 'him', 'she', 'her', 'it', 'we', 'us', 'they', 'them'];
  for (var i = 0; i < words.length; i++) {
    var lowerWord = words[i].toLowerCase();
    for (var j=0; j<personal_pronouns.length; j++) {
      if (lowerWord == personal_pronouns[j]) {
        count++;
      }
    }
  }
  console.log('The text included '+count+' personal pronouns.');


  // another way to write the above
  count = 0;
  var personal_pronouns = ['i', 'me', 'you', 'he', 'him', 'she', 'her', 'it', 'we', 'us', 'they', 'them'];
  for (var i = 0; i < words.length; i++) {
    var lowerWord = words[i].toLowerCase();
    if (personal_pronouns.indexOf(lowerWord) !== -1) {
      count++;
    }
  }
  console.log('The text included '+count+' personal pronouns.');

});