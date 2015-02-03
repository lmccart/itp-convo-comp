// Using chrome speech API
// http://shapeshed.com/html5-speech-recognition-api/

// Using AlchemyAPI
// http://www.alchemyapi.com/api/sentiment/proc.html

$(document).ready(function(){

  var i = 0;

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  //recognition.interimResults = true;
  recognition.onresult = function(event) { 
    console.log(event.results)
    var res = event.results[i][0].transcript;

    // Get sentiment of phrase.
    var params = {
      text: res,
      apikey: 'YOUR_KEY',
      outputMode: 'json'
    }

    var url = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';
    $.getJSON(url, params, function(data) {
      console.log(data);
      $('body').append(res+' ('+data.docSentiment.type+':'+data.docSentiment.score+')<br>');
    });

    i++;
  }
  recognition.start();      
});