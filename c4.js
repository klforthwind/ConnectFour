let firstPlayer;
let board;
let ai;

function setup() {
  board = new Board();
  ai = new AI();

  firstPlayer = Math.floor(Math.random()*2);
}

function draw() {
  if (firstPlayer % 2 === 0) {
    ai.playMove(board, firstPlayer);
    firstPlayer++;
  }
}

function mousePressed() {
  if (firstPlayer % 2 === 1) {
    let didMove = board.putPiece(firstPlayer, board.getCol(mouseX));
    if (didMove) firstPlayer++;
  }
}
