Node RestClient
===============

Sometimes dabbling in HTTP Client connection and body processing can get messy. Never fear, Node-RestClient is here! Sporting a spiffy "jQuery" style familiar API, Node-RestClient bends to your every whim.

Examples
--------


	var restclient = require('./restclient'), sys = require("sys");
	restclient.get("http://twitter.com/statuses/show/4.json", function(result) { sys.puts(result); }, "json");
	restclient.post("http://username:password@twitter.com/statuses/update.json", {status: "I love Node.js"}, function(result) { sys.puts(result);  }, "json");

API
---

`
restclient.get( url, [data], [callback], [type] )
`

**url** A standard URL or a Basic Authentication encoded URL (as shown above), it will automatically figure out what to do! Optional.

**data** Key/value pairs that will be sent to the server. Optional.

**callback** A function to be executed whenever the data is loaded successfully. Optional.

**type** Either "text" or "json". Optional.


Summary
-------

And just like that you can consume web-services with the elegance of a ruby, but the speed of a V8! Due note that just like jQuery, the result returned will be a JSON object if "json" is specified as the type.
