const readlineSync = require('readline-sync');

let firstNumber = new Number(
	readlineSync.question('Please give me a number without decimals: ')
);

let secondNumber = new Number(
	readlineSync.question('Please give me another number without decimals: ')
);

console.log(firstNumber % secondNumber);
