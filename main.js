let game;

function setup() {
  game = new ConnectFour(false);
}

function draw() {
    game.draw();
}

function mousePressed() {
  game.mousePressed();
}
