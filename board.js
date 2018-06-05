class Board {

  constructor() {
    // Pixel count of the length of the side of a grid slot
    this.pxLength = 75;
    // Size of grid
    this.rows = 6;
    this.cols = 7;
    this.grid = [...Array(this.rows).keys()].map(i => Array(this.cols));
    // Useful rgb color vals to use for connect four
    this.black = color(0,0,0);
    this.blue = color(0,0,220);
    this.red = color(220,0,0);
    this.yellow = color(220,220,0);
    // Make location of last game piece placed null for now
    this.lastRow = null;
    this.lastCol = null;
    // Create win conditions to find a winner every placed tile
    this.wc = new WinConditions();
    this.winner = null;
    // Clear the connect four board
    this.clear();
    // Show visuals of the board
    createCanvas(this.pxLength * this.cols, this.pxLength * this.rows);
    background(this.blue);
    this.update();
  }

  clear() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = this.black;
      }
    }
  }

  // Show updated visuals of the board
  update() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        let piece = this.grid[r][c];
        let sizeDiff = (r === this.lastRow && c === this.lastCol) ? -5 : 0;
        this.circle(r, c, color(0,0,0), this.pxLength);
        this.circle(r, c, piece, this.pxLength + sizeDiff);
      }
    }
  }

  // Draw a circle onto the canvas
  circle(r, c, color, size) {
    // Change brush color
    fill(color);
    // Get coords and size of where to paint the circle
    let yPos = (this.rows - 1 - r) * this.pxLength + this.pxLength /2;
    let xPos = c * this.pxLength + this.pxLength / 2;
    let diameter = size - 10;
    // Show the circle on canvas
    ellipse(xPos, yPos, diameter, diameter);
  }

  // Add a game piece to the board grid
  putPiece(color, col, move) {
    let row = null;
    // Check column col for an open slot
    for (let r = 0; r < this.rows; r++) {
      // Checks to see if row r on column col is empty
      if (this.grid[r][col] === this.black) {
        // Places piece on the board
        this.grid[r][col] = color;
        row = r;
        this.lastRow = r;
        this.lastCol = col;
        // Check for winner or tie
        this.winner = (this.wc.checkForWin(this.grid, color, row, col)) ? move % 2 : null;
        if (this.wc.checkForTie(this.winner, move)) this.winner = "tie";
        break;
      }
    }

    this.update();
    return  row !== null;
  }

  // Get column of where the mouse pressed
  getCol(px) {
    return (px - (px % this.pxLength)) / this.pxLength;
  }
}
