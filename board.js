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
        let color = this.grid[i][j];
        fill(color);
        let yPos = (this.rows - 1 - i) * this.sideLength + this.sideLength /2;
        let xPos = j * this.sideLength + this.sideLength / 2;
        let diameter = this.sideLength - 10;
        ellipse(xPos, yPos, diameter, diameter);
      }
    }
  }

  putPiece(player, col) {
    let row = null;
    for (let i = 0; i < this.rows; i++) {
      if (this.grid[i][col] === this.black) {
        this.grid[i][col] = (player % 2 === 1) ? this.red : this.yellow;
        row = true;
        break;
      }
    }
    this.update();
    return row;
  }

  getCol(px) {
    return (px - (px % this.sideLength)) / this.sideLength;
  }

  getGrid() {
    return this.grid;
  }
}
