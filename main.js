let game;

// Happens after JS is loaded
function setup() {
  game = new ConnectFour(false);
}


// Executes 30 times a second?
function draw() {
    game.draw();
}

// Executes when mouse is pressed on the window
function mousePressed() {
  game.mousePressed();
}
