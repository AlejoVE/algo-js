const readlineSync = require('readline-sync');

let firstNumber = new Number(
	readlineSync.question('Please give me a number with decimals: ')
);

let secondNumber = new Number(
	readlineSync.question('Please give me another number with decimals: ')
);

let integer = Math.floor(firstNumber);
console.log(integer * secondNumber);
