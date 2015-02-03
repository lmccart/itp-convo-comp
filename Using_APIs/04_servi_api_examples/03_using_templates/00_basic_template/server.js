var servi = require('servi');

var app = new servi(true);

port(8080);

route('/', requestHandler);


var content = {
  title: "Cats on Mars",
  intro: "Cats on Mars explores the mysteries of space cats.",
  colors: ["orange", "black", "gray", "white"]
};

function requestHandler(request) {
  request.render("templates/page.html",content);
}

start();