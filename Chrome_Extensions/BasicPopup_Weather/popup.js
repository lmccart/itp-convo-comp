function loadWeather() {
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?id=5128581&units=imperial", function(data) {
    $('#weather').html("Temperature is: " + data.main.temp );
  });  
}

$(document).ready(function() {
  loadWeather();
});