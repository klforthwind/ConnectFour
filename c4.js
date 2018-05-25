let board;
let ai;
let wc;
let playerColor;
let move;
let lead;

function setup() {
  board = new Board();
  move = 1;

  lead = [0,0];
  lead[Math.floor(Math.random()*2)] = 1;
  let color = [board.yellow, board.red];
  ai = new AI(color[lead[0]]);
  playerColor = color[lead[1]];

  wc = new WinConditions();
}

function draw() {
    play();
}

function play() {
  if (move % 2 === lead[0] && board.winner == null) {
    let didMove = ai.playMove(board, move);
    if (didMove) move++;
    isWinner();
  }
}

function mousePressed() {
  if (move % 2 === lead[1] && board.winner === null) {
    let didMove = board.putPiece(playerColor, board.getCol(mouseX), move);
    if (didMove) move++;
    isWinner();
  }
}

function isWinner() {
  if (board.winner !== null) {
    console.log(board.winner);
  }
}
