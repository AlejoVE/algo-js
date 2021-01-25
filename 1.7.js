const readlineSync = require('readline-sync');

let shoeSize = new Number(
	readlineSync.question('Please give me your shoe size: ')
);

let yearOFBirth = new Number(
	readlineSync.question('Please give me your year of birth: ')
);

const operation = (shoeSize * 2 + 5) * 50 - yearOFBirth;

const result = operation + 1766;

console.log(result);
