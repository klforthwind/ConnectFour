class AI {
  constructor() {

  }

  playMove(board, player) {
    return board.putPiece(player, Math.floor(Math.random() * 7));
  }
}
