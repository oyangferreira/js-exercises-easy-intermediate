const readline = require('readline-sync');

function InvertString(str) {
    return str.split('').reverse().join('');
}

let originString = readline.question("Enter the text:");
let stringInverted = InvertString(originString);

console.log("Origin String:", originString);
console.log("String Inverted:", stringInverted); 
