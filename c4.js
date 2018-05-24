let firstPlayer;
let board;
let ai;
let wc;
let winner;
let noWinner = true;

function setup() {
  board = new Board();
  ai = new AI();
  wc = new WinConditions();
  winner = null;

  firstPlayer = Math.floor(Math.random()*2);
}

function draw() {
  play();
}

function play() {
  if (firstPlayer % 2 === 0) {
    winner = wc.getWinner(board);
    if (winner !== null) {
      if (noWinner) {
        noWinner = false;
        console.log(winner);
      }
    } else {
      let didMove = ai.playMove(board, firstPlayer);
      if (didMove) firstPlayer++;
    }
  }
}

function mousePressed() {
  if (firstPlayer % 2 === 1 && winner == null) {
    winner = wc.getWinner(board);
    if (winner !== null) {
      if (noWinner) {
        noWinner = false;
        console.log(winner);
      }
    } else {
      let didMove = board.putPiece(firstPlayer, board.getCol(mouseX));
      if (didMove) firstPlayer++;
    }
  }
}
