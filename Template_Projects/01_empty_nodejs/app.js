http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end('Hello World');

}).listen(3000);
console.log('Server running at 3000');

