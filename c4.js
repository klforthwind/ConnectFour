class ConnectFour {
  constructor(p1ai) {
    this.board = new Board();

    this.lead = [0,0];
    this.lead[Math.floor(Math.random()*2)] = 1;

    let color = [this.board.yellow, this.board.red];
    let p1Color = color[this.lead[0]];
    let p2Color = color[this.lead[1]];

    this.p1 = (p1ai) ? new AI(p1Color) : new Human(p1Color);
    this.p2 = new AI(p2Color);

    this.turnNum = 1;
  }

  draw() {
    if (this.board.winner === null) {
      let player = (this.turnNum % 2 === this.lead[0]) ? this.p1 : this.p2;
      if (player.isAI()) {
        let didMove = player.playMove(this.board, this.turnNum);
        if (didMove) this.turnNum++;
      }
    }
  }

  mousePressed() {
    if (this.board.winner === null) {
      let player = (this.turnNum % 2 === this.lead[0]) ? this.p1 : this.p2;
      if (!player.isAI()) {
        let didMove = this.board.putPiece(player.getColor(), this.board.getCol(mouseX), this.turnNum);
        if (didMove) this.turnNum++;
      }
    }
  }

  clear() {
    this.board.clear();
    this.board.winner = null;
  }
}
