const readline = require('readline-sync');

let people = {
    name: readline.question("Enter your name: "),
    age: parseInt(readline.question("Enter your age: ")),
    city: readline.question("Enter your city: ")
}

console.log("Name: " + people.name);
console.log("Age: " + people.age);
console.log("City: " + people.city);