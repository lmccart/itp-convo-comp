// Using chrome speech API
// http://shapeshed.com/html5-speech-recognition-api/

$(document).ready(function(){

  var i = 0;

  var recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  //recognition.interimResults = true;
  recognition.onresult = function(event) { 
    console.log(event.results)
    var res = event.results[i][0].transcript;
    $('body').append(res);
    i++;
  }
  recognition.start();      
});