let c4;

// Happens after JS is loaded
function setup() {
  c4 = new ConnectFour(false);
}


// Executes 30 times a second?
function draw() {
    c4.loop();
}

// Executes when mouse is pressed on the window
function mousePressed() {
  c4.mousePressed();
}
