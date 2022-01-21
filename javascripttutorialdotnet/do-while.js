
// let count = 0;

// do {
//     console.log(count);
//     count++;
// } while(count < 5);



// 2. using the javaScript do while statement to make a simple number gessing game 



const min = 1;
const max = 10;

let secretNumber = Math.floor(Math.random() * (max - min + 1) + min);

let guesses = 0;
let hint = '';
let number = 0;

do {
    let input = prompt(`please enter a number between ${min} and ${max} + hint`);

    number = parseInt(input);

    guesses++;

    if(number > secretNumber) {
        hint = ', and less than ' + number;
    }
    else if (number < secretNumber) {
        hint = ', and greater than ' + number;
    }
    else if(number == secretNumber) {
        alert(`Bravo! you're correct after ${guesses} guess(es)`);
    }
} while (number != secretNumber);