class WinConditions {
  let winner;

  constructor() {
  }

  getWinner(grid) {
    winner = null;
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
