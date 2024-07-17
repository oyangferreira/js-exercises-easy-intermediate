const readline = require('readline-sync');

function addElements() {
    let numbers = [];
    let repeat = true;

    while (repeat) {
        let number = parseFloat(readline.question("Enter a number (or 'q' to finish): "));
        
        if (isNaN(number)) {
            if (readline.keyInYNStrict("Do you want to end entering numbers?")) {
                repeat = false;
            }
        } else {
            numbers.push(number);
        }
    }

    let add = 0;
    for (let i = 0; i < numbers.length; i++) {
        add += numbers[i];
    }

    return add;
}

let result = addElements();
console.log("Sum of the elements:", result); 
