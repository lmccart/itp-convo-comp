function setup() {

  createCanvas(600, 400);
  loadJSON('/getAll', drawScene);
  noStroke();
}

function drawScene(data) {
  console.log(data);

  fill(255);
  background(42, 169, 217);

  // draw a white circle for each previous saved point
  for (var i=0; i<data.length; i++) {
    ellipse(data[i].x, data[i].y, 30, 30);
  }

}

function mousePressed() {
  // draw black circle
  fill(0);
  ellipse(mouseX, mouseY, 30, 30);

  // send point coords to server for storage
  httpPost('/addPos', {x:mouseX, y:mouseY});
}