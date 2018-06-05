class WinConditions {

  constructor() {
    // Consecutive amount of pieces to win
    this.winLength = 4;
    this.grid = null;
  }

  checkForWin(grid, color, row, col) {
    this.grid = grid;

    let wL = this.winLength;
    if (this.checkVert(color, row, col) >= wL) return true;
    if (this.checkHoriz(color, row, col) >= wL) return true;
    if (this.checkDiagUp(color, row, col) >= wL) return true;
    if (this.checkDiagDown(color, row, col) >= wL) return true;

    return false;
  }

  checkVert(color, row, col) {
    return this.recurse(color, row - 1, col, -1, 0) + 1;
  }

  checkHoriz(color, row, col) {
    return this.recurse(color, row, col + 1, 0, 1) +
      this.recurse(color, row, col - 1, 0, -1) + 1;
  }

  checkDiagUp(color, row, col) {
    return this.recurse(color, row - 1, col + 1, -1, 1) +
      this.recurse(color, row + 1, col - 1, 1, -1) + 1;
  }

  checkDiagDown(color, row, col) {
    return this.recurse(color, row - 1, col - 1, -1, -1) +
      this.recurse(color, row + 1, col + 1, 1, 1) + 1;
  }

  recurse(color, row, col, rowChange, colChange) {
    let colorMatch = this.preReqs(color, row, col);
    return (colorMatch) ? this.recurse(color, row + rowChange, col + colChange, rowChange, colChange) + 1 : 0;
  }

  preReqs(color, row, col) {
    return row >= 0 && row < this.grid.length && col >= 0 && col < this.grid[row].length &&
      this.grid[row][col] !== undefined && this.grid[row][col] === color;
  }

  checkForTie(winner, move) {
    return winner === null && move + 1 > this.grid.length * this.grid[0].length;
  }
}
