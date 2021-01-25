const readlineSync = require('readline-sync');

let firstName = readlineSync.question('Can you give me your name please?');
let lastName = readlineSync.question('Can you give me your surname please?');
let city = readlineSync.question('Where do you live?');

console.log(`Your name is ${firstName} ${lastName} and you live in ${city}`);
