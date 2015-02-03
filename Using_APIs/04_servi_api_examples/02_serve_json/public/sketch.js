
function setup() {
  createCanvas(600, 400);
  noLoop();
  noStroke();
  textSize(10);

  loadJSON("/statuses", drawData);
}

function draw() {
  background(255, 0, 0);
  console.log(int(random(0, 2)));
}


function drawData(data) {
  console.log(data);
  background(0);
  for (var i=0; i<data.length; i++) {
    text(data[i].text, 0, i*12);
  }
}