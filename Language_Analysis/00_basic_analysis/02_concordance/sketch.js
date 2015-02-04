// Adapted from Dan Shiffman's Programming from A to Z course
// https://github.com/shiffman/Programming-from-A-to-Z-F14

$(document).ready(function(){
    
  var text = "When he was in school he longed to be out, and when he was out he longed to be in. On the way he thought about coming home, and coming home he thought about going. Wherever he was he wished he were somewhere else, and when he got there he wondered why he'd bothered. Nothing really interested him — least of all the things that should have. It seems to me that almost everything is a waste of time, he remarked one day as he walked dejectedly home from school. I can't see the point in learning to solve useless problems, or subtracting turnips from turnips, or knowing where Ethiopia is or how to spell February. And, since no one bothered to explain otherwise, he regarded the process of seeking knowledge as the greatest waste of time of all.";

  var concordance = {};
  // concordance['he'] = 14;

  // create array
  var tokens = text.split(/\W+/);
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    // It's a new word!
    if (concordance[word] === undefined) {
      concordance[word] = 1;
    // We've seen this word before!
    } else {
      concordance[word]++;
    }
  }

  console.log(concordance);

  var keys = [];
  concordance = {}; // reset object
  for (var i = 0; i < tokens.length; i++) {
    var word = tokens[i].toLowerCase();
    if (concordance[word] === undefined) {
      concordance[word] = 1;
      // When we have a new word, let's add to our keys array!
      keys.push(word);
    } else {
      concordance[word]++;
    }
  }

  keys.sort(function(a, b) {
    if (concordance[b] > concordance[a]) {
      return 1;
    } else {
      return -1;
    }
  });

  for (var i = 0; i < keys.length; i++) {
    console.log(keys[i] + ': ' + concordance[keys[i]]);
  }


});