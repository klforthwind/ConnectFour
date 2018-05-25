class WinConditions {

  constructor() {
    this.three = 3;
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
    let winner = null;
    // for (let i = 0; i < 6; i++) {
    //   let redTiles = [];
    //   let yellowTiles = [];
    //   let slots = [4,5,6,6,5,4];
    //   let row = max(i, board.rows - 1);
    //   for (let j = 0; j < slots[row]; j++) {
    //     if (board.grid[row - j][j + this.overflow(i, row)] === board.red) {
    //       redTiles[redTiles.length] = j;
    //     } else if (board.grid[row - j][j + this.overflow(i, row)] === board.yellow) {
    //       yellowTiles[yellowTiles.length] = j;
    //     }
    //   }
    //   let fourYellow = this.fourConsecutiveNumbers(yellowTiles);
    //   let fourRed = this.fourConsecutiveNumbers(redTiles);
    //   if (fourYellow) {
    //     winner = "Yellow";
    //   } else if (fourRed) {
    //     winner = "Red";
    //   }
    //   if (winner !== null) break;
    // }
    return winner;
  }

  // overflow(value, ceiling) {
  //   return (value > ceiling) ? value - ceiling : 0;
  // }
  //
  // max(value, max) {
  //   return (value > max) ? max : value;
  // }

  checkDiagonalUp(board) {
    let winner = null;
    let grid = this.simplify(board.grid, true);
    for (let j = 0; j < 6; j++) {
      let redTiles = [];
      let yellowTiles = [];

      for (let i = 0; i < grid.length; i++) {
        if (grid[i][j] === board.red) {
          redTiles[redTiles.length] = i;
        } else if (grid[i][j] === board.yellow) {
          yellowTiles[yellowTiles.length] = i;
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

  simplify(oldGrid, moveRight) {
    let oldRows = oldGrid.length;
    let oldCols = oldGrid[0].length;

    let newCols = (oldRows > oldCols) ? oldCols: oldRows;
    let newRows = (oldRows + oldCols - this.three * 2 - 1);
    let newGrid = [...Array(newRows).keys()].map(i => Array(newCols));

    for (let i = 0; i < newRows; i++) {
      for (let j = 0; j < newCols; j++) {
        let oldCol = (i < this.three) ? j + this.three - i: j;
        let newCol = (newRows - this.three < i) ? j + i - this.three: j;
        if (newCol < newCols) {
          newGrid[i][newCol] = oldGrid[i][oldCol];
        }
      }
    }
    return newGrid;
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
