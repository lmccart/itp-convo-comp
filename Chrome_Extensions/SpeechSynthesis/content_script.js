//------------------DOC READY-------------------//

$("document").ready(function(){
  console.log('hi')
  var tweets = $('.tweet-text');
  var s = $(tweets[0]).text();
  console.log(s);
  var msg = new SpeechSynthesisUtterance(s);
  window.speechSynthesis.speak(msg);
});
