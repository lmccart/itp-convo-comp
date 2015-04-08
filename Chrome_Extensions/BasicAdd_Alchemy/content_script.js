function loadSentiment() {

  var url = window.location.href;
  console.log(url);

  var params = {
    url: encodeURI(url),
    apikey: '8db419e40f6edb29532e48b14b9e6223d7052880',
    outputMode: 'json'
  }

  var url = 'http://access.alchemyapi.com/calls/url/URLGetTextSentiment';
  $.getJSON(url, params, function(data) {
    console.log(data);
    $('body').append('<div id="sentiment">'+data.docSentiment.type+': '+data.docSentiment.score+'</div>');
  });
}

$(document).ready(function() {
  loadSentiment();
});