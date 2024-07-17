const readline = require('readline-sync');

let repeat = true;

while(repeat){
    let value1 = parseInt(readline.question("Enter de 1st value: "));
    let value2 = parseInt(readline.question("Enter de 2st value: "));

    function Largest() {
        if(value1 > value2) {
            console.log("Highest value: " + value1);
        }
        else {
            console.log("Highest value: " + value2);
        }
    }

    Largest();

    repeat = readline.keyInYN("You want to continue?");
}
console.log("Completed Operations!");