const readline = require('readline');
const TicTacToe = require('./TicTacToe.js');

const ticTacToe = new TicTacToe();

const renderCurrentPlayer = (currentPlayer) => {
  console.log(`Current player: ${currentPlayer}`);
};

const renderBoard = (board) => {
  board.forEach(row => console.log(row));
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Tic Tac Toe');
renderBoard(ticTacToe.board);
renderCurrentPlayer(ticTacToe.currentPlayer);
console.log('Input row, col: ');

rl.on('line', line => {
  const [i, j] = line.trim().split(',').map(Number);
  ticTacToe.move(i, j);
  renderBoard(ticTacToe.board);
  if (this.winner) {
    if (this.winner === 'TIE') {
      console.log('Game ends in TIE');
      return rl.close();
    }
    console.log(`Player ${ticTacToe.currentPlayer} won!`);
    return rl.close();
  }
  renderCurrentPlayer(ticTacToe.currentPlayer);
  console.log('Input row, col: ');
});