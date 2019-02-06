const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Type something:');

rl.on('line', line => {
  console.log('You typed: ' + line);
  console.log('Type something else:');
});