// Modules included with nodejs, just need to link them in
var util = require('util');
var fs = require('fs');

// Install markov module: npm install markov
// Markov module docs https://github.com/substack/node-markov

var markov = require('markov');
var m = markov(3);

var s = fs.createReadStream(__dirname + '/corpus.txt');
m.seed(s, function () {
  var stdin = process.openStdin();
  util.print('> ');

  stdin.on('data', function (line) {
    var res = m.respond(line.toString(), 8).join(' ');
    console.log(res);
    util.print('> ');
  });
});