// https://www.mashape.com/japerk/text-processing

// you will need to install unirest http://unirest.io/nodejs
// npm install unirest

// POS tags: https://www.ling.upenn.edu/courses/Fall_2003/ling001/penn_treebank_pos.html


var http = require('http');
var unirest = require('unirest');

http.createServer(function (req, res) {
  res.setHeader('Content-Type', 'application/json');
    

  unirest.post("https://japerk-text-processing.p.mashape.com/tag/")
  .header("X-Mashape-Key", "YOUR_KEY")
  .header("Content-Type", "application/x-www-form-urlencoded")
  .header("Accept", "application/json")
  .send("language", "english")
  .send("output", "tagged")
  .send("text=Parents: What is your message to parents who don't vaccinate their kids? Share your video or written perspective on CNN iReport. (CNN)To call the news surrounding vaccinations a 'debate' is misleading. The scientific and medical consensus is clear: Vaccinations are safe, and they work. But there are many who choose -- for their own reasons -- to disregard the recommendations to vaccinate and exercise their right to not do so. The controversy, then, comes when the anti-vaccination movement gets large enough to reverse advances in the reduction or elimination of certain diseases. That's what is happening with the measles.")
  .end(function (result) {
    console.log(result.status, result.headers, result.body);
    res.end(JSON.stringify(result.body));
  });
  
}).listen(3000);
console.log('Server running at 3000');

