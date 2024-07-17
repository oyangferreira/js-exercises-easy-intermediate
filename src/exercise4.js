const readline = require('readline-sync');

let repeat = true;

while(repeat) {
    let value = parseFloat(readline.question("Enter the value: "))

    if(value === 0) {
        console.log("Zero: " + value);
    }
    else if(value < 0) {
        console.log("Negativo: " + value);
    }
    else {
        console.log("Positivo: " + value);
    }

    repeat = readline.keyInYN("You want to continue?");
}

console.log("Completed Operations!"); 