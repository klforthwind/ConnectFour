class ConnectFour {

  // Make a game of connect four occur
  constructor(p1ai) {
    // Create a connect four board
    this.board = new Board();
    // Figure out who starts first
    this.lead = [0,0];
    this.lead[Math.floor(Math.random()*2)] = 1;
    // Assign colors depending on who goes first (RED goes first)
    let color = [this.board.yellow, this.board.red];
    this.p1Color = color[this.lead[0]];
    this.p2Color = color[this.lead[1]];
    // Create players depending on if params want them to be AI or human
    this.p1 = (p1ai) ? new AI(this.p1Color) : new Human(this.p1Color);
    this.p2 = new AI(this.p2Color);
    // Set turn counter equal to 1
    this.move = 1;
    // Create win conditions
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
      console.log(this.board.winner);
      this.board.clear();
      this.move = 1;
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
}
