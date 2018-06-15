let game;
let g;

// Happens after JS is loaded
function setup() {
  game = new ConnectFour(true);
  g = new Graphics();
}

// Executes 30 times a second?
function draw() {
    game.draw();
    g.show(game.board.bg, 0, 0);
}

// Executes when mouse is pressed on the window
function mousePressed() {
  game.mousePressed();
}
