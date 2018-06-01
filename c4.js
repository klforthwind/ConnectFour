class ConnectFour {
  constructor(p1ai, p2ai) {
    this.board = new Board();

    this.lead = [0,0];
    this.lead[Math.floor(Math.random()*2)] = 1;
    let color = [this.board.yellow, this.board.red];

    this.p1Color = color[this.lead[0]];
    this.p2Color = color[this.lead[1]];

    this.p1 = (p1ai) ? new AI(this.p1Color) : new Human(this.p1Color);
    this.p2 = (p2ai) ? new AI(this.p2Color) : new Human(this.p2Color);

    this.move = 1;

    this.wc = new WinConditions();
  }

  loop() {
    if (this.board.winner === null) {
      let player = (this.move % 2 === this.lead[0]) ? this.p1 : this.p2;
      if (player.isAI()) {
        let didMove = player.playMove(this.board, this.move);
        if (didMove) this.move++;
      }
    } else {
      this.board.clear();
      this.board.winner = null;
    }
  }

  mousePressed() {
    if (this.board.winner === null) {
      let player = (this.move % 2 === this.lead[0]) ? this.p1 : this.p2;
      if (!player.isAI()) {
        let didMove = this.board.putPiece(player.getColor(), this.board.getCol(mouseX), this.move);
        if (didMove) this.move++;
      }
    }
  }

  isWinner() {
    if (board.winner !== null) {
      console.log(board.winner);
    }
  }
}
