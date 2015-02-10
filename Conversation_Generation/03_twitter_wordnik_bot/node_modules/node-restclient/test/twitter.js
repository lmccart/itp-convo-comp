var sys = require('sys');
var restclient = require('../src/restclient');
var fail = false


// Test JSON encoding
var res = restclient.get("http://twitter.com/statuses/public_timeline.json", function(result) {
  if ((typeof result !== "object")) {
    fail = true;
  }
}, "json");


// Test Non-JSON encoding
restclient.get("http://twitter.com/statuses/public_timeline.json", function(result) {
  if ((typeof result !== "string")) {
    fail = true;
  }
});


// Test sending data encoding
restclient.get("http://search.twitter.com/search.json",  {q: "node", show_user: "true"}, function(result) {
  if ((typeof result !== "object")) {
    fail = true;
  }
}, "json");



process.addListener("exit", function () {
  if (fail) {
    sys.puts("Get it right -- or else!!!");
  }
});
