// http://www.alchemyapi.com/api/sentiment/proc.html

$(document).ready(function(){

  var params = {
    url: encodeURI('http://p5js.org/'),
    apikey: 'YOUR_KEY',
    outputMode: 'json'
  }

  // Get sentiment of web page.
  var url = 'http://access.alchemyapi.com/calls/url/URLGetTextSentiment';
  $.getJSON(url, params, function(data) {
    console.log('url sentiment');
    console.log(data);
  });

  // Extract keywords from web page.
  url = 'http://access.alchemyapi.com/calls/url/URLGetRankedKeywords';
  $.getJSON(url, params, function(data) {
    console.log('url keywords');
    console.log(data);
  });


  // Extract keywords from text.
  var source_text = "Credit cards offer many advantages. There is the convenience of being able to buy needed items now and the security of not having to carry cash. You also receive fraud protection and in some cases rewards for making purchases. With these advantages also come responsibilities. You need to manage credit cards wisely by understanding all of the card's terms and conditions; stay on top of payments; and realize the true cost of purchases made with credit. Using a credit card is like taking out a loan. If you don't pay your card balance in full each month, you'll pay interest on that loan.";
  params = {
    text: encodeURI(source_text),
    apikey: '8db419e40f6edb29532e48b14b9e6223d7052880',
    outputMode: 'json'
  }

  url = 'http://access.alchemyapi.com/calls/text/TextGetRankedKeywords';
  $.getJSON(url, params, function(data) {
    console.log('text keywords');
    console.log(data);
  });

});