const readlineSync = require('readline-sync');

console.log('Hello! I have some questions for you');
console.log('Lets start!');

let firstResponse = readlineSync.question('What is your favorite animal: ');
console.log('Two questions left');

let secondResponse = readlineSync.question(
	'What is your less favorite animal?: '
);
console.log('Last question!');

let thirdResponse = readlineSync.question(
	'Please describe that animal in one word: '
);
console.log(
	`The brave ${firstResponse} will protect you from the ${thirdResponse} ${secondResponse}`
);
