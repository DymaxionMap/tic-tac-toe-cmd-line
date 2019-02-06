class TicTacToe {
  constructor() {
    this.currentPlayer = 'X';
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    this.winner = null;
  }

  filled(array, currentPlayer) {
    return array.every(square => square === currentPlayer);
  }

  checkRowWin(i, currentPlayer) {
    return this.filled(this.board[i], currentPlayer);
  }

  checkColWin(j, currentPlayer) {
    const col = [this.board[0][j], this.board[1][j], this.board[2][j]];
    this.filled(col, currentPlayer);
  }

  checkDiagWin(currentPlayer) {
    const majorDiag = [this.board[0][0], this.board[1][1], this.board[2][2]];
    const minorDiag = [this.board[2][0], this.board[1][1], this.board[0][2]];
    return this.filled(majorDiag, currentPlayer) || this.filled(minorDiag, currentPlayer);
  }

  checkWin(i, j, currentPlayer) {
    return this.checkRowWin(currentPlayer) || this.checkColWin(currentPlayer) || this.checkDiagWin(currentPlayer);
  }

  checkTie() {
    return this.board.every(row => !row.some(square => square === null));
  }

  isValidMove(i, j) {
    return (i >= 0 && i <= 2) && (j >= 0 && j <= 2) && (this.board[i][j] === null);
  }

  move(i, j) {
    if (!this.isValidMove(i, j)) {
      return;
    }
    this.board[i][j] = this.currentPlayer;
    const currentPlayerWins = this.checkWin(i, j, this.currentPlayer);
    if (currentPlayerWins) {
      this.winner = this.currentPlayer;
    }
    if (this.checkTie()) {
      this.winner = 'TIE';
    }
    this.currentPlayer = (this.currentPlayer === 'X') ? 'O' : 'X';
  }
}

module.exports = TicTacToe;