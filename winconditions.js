class WinConditions {

  constructor() {
  }

  getWinner(board) {
    let hor = this.checkHorizontal(board);
    if (hor !== null) return hor;
    let vert = this.checkVertical(board);
    if (vert !== null) return vert;
    let diagDown = this.checkDiagonalDown(board);
    if (diagDown !== null) return diagDown;
    let diagUp = this.checkDiagonalUp(board);
    if (diagUp !== null) return diagUp;
    let gridFull = this.checkGridSpace(board);
    if (gridFull !== null) return gridFull;
    return null;
  }

  checkHorizontal(board) {
    let winner = null;
    for (let i = 0; i < board.rows; i++) {
      let redTiles = [];
      let yellowTiles = [];
      for (let j = 0; j < board.cols; j++) {
        if (board.grid[i][j] === board.red) {
          redTiles[redTiles.length] = j;
        } else if (board.grid[i][j] === board.yellow) {
          yellowTiles[yellowTiles.length] = j;
        }
      }
      let fourYellow = this.fourConsecutiveNumbers(yellowTiles);
      let fourRed = this.fourConsecutiveNumbers(redTiles);
      if (fourYellow) {
        winner = "Yellow";
      } else if (fourRed) {
        winner = "Red";
      }
      if (winner !== null) break;
    }
    return winner;
  }

  checkVertical(board) {
    let winner = null;
    for (let i = 0; i < board.cols; i++) {
      let redTiles = [];
      let yellowTiles = [];
      for (let j = 0; j < board.rows; j++) {
        if (board.grid[j][i] === board.red) {
          redTiles[redTiles.length] = j;
        } else if (board.grid[j][i] === board.yellow) {
          yellowTiles[yellowTiles.length] = j;
        }
      }
      let fourYellow = this.fourConsecutiveNumbers(yellowTiles);
      let fourRed = this.fourConsecutiveNumbers(redTiles);
      if (fourYellow) {
        winner = "Yellow";
      } else if (fourRed) {
        winner = "Red";
      }
      if (winner !== null) break;
    }
    return winner;
  }

  checkDiagonalDown(board) {
    return null;
  }

  checkDiagonalUp(board) {
    return null;
  }

  checkGridSpace(board) {
    let spaceFull = true;
    for (let i = 0; i < board.rows; i++) {
      for (let j = 0; j < board.cols; j++) {
        if (board.grid[i][j] === board.black) {
          spaceFull = false;
          break;
        }
      }
    }
    return (spaceFull) ? "tie" : null;
  }

  fourConsecutiveNumbers(arr) {
    if (arr.length >= 4) {
      let num = arr[0];
      let count = 1;
      for (let i = 1; i <arr.length; i++) {
        if (arr[i] !== num + count) {
          num = arr[i];
          count = 1;
        } else if (arr[i] === num + count) {
          count++;
        }
        if (count >= 4) break;
      }
      return count >= 4;
    } else {
      return false;
    }
  }
}
