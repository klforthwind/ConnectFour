let c4;

function setup() {
  c4 = new ConnectFour(true, true);
}

function draw() {
    c4.loop();
}

function mousePressed() {
  c4.mousePressed();
}
