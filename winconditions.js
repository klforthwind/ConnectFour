class WinConditions {

  constructor() {
    this.winner = null;
  }

  getWinner(grid) {
    this.winner = null;
    checkHorizontal(grid);
    checkVertical(grid);
    checkDiagonalDown(grid);
    checkDiagonalUp(grid);
  }

  checkHorizontal(grid) {

  }

  checkVertical(grid) {

  }

  checkDiagonalDown(grid) {

  }

  checkDiagonalUp(grid) {

  }
}
