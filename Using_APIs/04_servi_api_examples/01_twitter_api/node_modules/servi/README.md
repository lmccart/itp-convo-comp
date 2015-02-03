servi.js
========

servi.js is an easy to learn JavaScript node.js microframework for creating web servers.  It is inspired by Processing and p5.js.

There is a GUI IDE being developed for use with servi.js, https://github.com/antiboredom/servi-ide

Getting Started
========
1: Install node.js

2: npm install servi

3: Create a simple server 
```javascript
var servi = require('servi');
var app = new servi(true);

port(8080);

route('/', requestHandler);

function requestHandler(request) {
    request.respond("Hello World");
}

start();
```
4: node servi.js
