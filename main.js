let game;

// Happens after JS is loaded
function setup() {
  createCanvas(75 * 7, 75 * 6);
  game = new ConnectFour(true);
}


// Executes 30 times a second?
function draw() {
    game.draw();
    image(game.board.bg, 0, 0);
}

// Executes when mouse is pressed on the window
function mousePressed() {
  game.mousePressed();
}
