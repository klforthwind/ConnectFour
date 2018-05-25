class AI {

  constructor(color) {
    this.color = color;
  }

  playMove(board) {
    return board.putPiece(this.color, Math.floor(Math.random() * 7));
  }
}
