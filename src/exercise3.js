const readline = require('readline-sync');

let repeat = true;

while (repeat) {
    let value1 = parseInt(readline.question("Enter the 1st value: "));
    let value2 = parseInt(readline.question("Enter the 2st value: "));
    let operantions = readline.question("Enter the desired operation:\n 1 - addition\n 2 - subtraction\n 3 - multiplication\n 4 - division\n 5 - module ");
    let result;
    
    switch(operantions) {
        case '1':
        result = value1 + value2;
        break;

        case '2':
        result = value1 - value2;
        break;

        case '3':
        result = value1 * value2;
        break;

        case '4':
        result = value1 / value2;
        break;

        case '5':
        result = value1 % value2;
        break;

        default:
        result = "Is not operation";
    }
    console.log(operantions + ":", result);
    repeat = readline.keyInYN("You want to continue?");
}
console.log("Completed Operations!");
    
