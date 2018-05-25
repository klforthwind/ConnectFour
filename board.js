class Board {

  constructor() {
  this.sideLength = 75;
  this.rows = 6;
  this.cols = 7;
  this.grid = [...Array(this.rows).keys()].map(i => Array(this.cols));
  this.black = color(0,0,0);
  this.blue = color(0,0,220);
  this.red = color(220,0,0);
  this.yellow = color(220,220,0);
  this.winner = null;
  this.lastRow = null;
  this.lastCol = null;

  this.wc = new WinConditions();

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        this.grid[i][j] = this.black;
      }
    }

    createCanvas(this.sideLength * this.cols, this.sideLength * this.rows);
    background(this.blue);
    this.update();
  }

  update() {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let piece = this.grid[i][j];
        let sizeDiff = (i === this.lastRow && j === this.lastCol) ? -5 : 0;
        this.circle(i, j, color(0,0,0), this.sideLength);
        this.circle(i, j, piece, this.sideLength + sizeDiff);
      }
    }
  }

  circle(i, j, color, size) {
    fill(color);
    let yPos = (this.rows - 1 - i) * this.sideLength + this.sideLength /2;
    let xPos = j * this.sideLength + this.sideLength / 2;
    let diameter = size - 10;
    ellipse(xPos, yPos, diameter, diameter);
  }

  putPiece(color, col, move) {
    let row = null;
    for (let i = 0; i < this.rows; i++) {
      if (this.grid[i][col] === this.black) {
        this.grid[i][col] = color;
        row = i;
        this.lastRow = i;
        this.lastCol = col;
        this.winner = (this.wc.checkForWin(this.grid, color, row, col)) ? color : null;
        this.checkForTie(move);
        break;
      }
    }

    this.update();
    return row !== null;
  }

  checkForTie(move) {
    if (this.winner === null && move === this.grid.length * this.grid[0].length) {
      this.winner = "tie";
    }
  }

  getCol(px) {
    return (px - (px % this.sideLength)) / this.sideLength;
  }

  getGrid() {
    return this.grid;
  }
}
