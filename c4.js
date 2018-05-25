let firstPlayer;
let board;
let ai;
let wc;
let winner;
let noWinner = true;
let playerColor;


function setup() {
  board = new Board();

  firstPlayer = Math.floor(Math.random()*2);
  let aiColor = (firstPlayer % 2 === 1) ? board.red : board.yellow;
  playerColor = (firstPlayer % 2 === 0) ? board.red : board.yellow;

  ai = new AI(aiColor);
  wc = new WinConditions();
  winner = null;
}

function draw() {
    play();
}

function play() {
  if (firstPlayer % 2 === 0 && winner == null) {
    let didMove = ai.playMove(board);
    if (didMove) firstPlayer++;
    if (board.getWinner() === true) {
      winner = ai.color;
      console.log(winner);
    }
  }
}

function mousePressed() {
  if (firstPlayer % 2 === 1 && winner == null) {
    let didMove = board.putPiece(playerColor, board.getCol(mouseX));
    if (didMove) firstPlayer++;
    if (board.getWinner() === true) {
      winner = ai.color;
      console.log(winner);
    }
  }
}
