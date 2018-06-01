class AI {

  constructor(color) {
    this.color = color;
  }

  playMove(board, move) {
    return board.putPiece(this.color, Math.floor(Math.random() * 7), move);
  }

  isAI() {
    return true;
  }
}

class Human {
  constructor(color) {
    this.color = color;
  }

  isAI() {
    return false;
  }

  getColor() {
    return this.color;
  }
}
