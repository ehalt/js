// functions 

/*
        function name(parameter1, parameter2, parameter3) {
            // code to be executed
        }

*/


function myfunction(a, b) {
    return a * b;
}

let mul = myfunction(5, 4);
console.log(mul);




// greet function 

function greet(name) {
    return `Hello, there ${name}!`;
}

let greet_tori = greet("Torikus!");
let greet_shakil = greet("Shakil!!");
let greet_fahim = greet("Fahim!");
console.log(greet_shakil);
console.log(greet_fahim);
console.log(greet_tori);



// arrow function 

let multiply = (x, y) => {
    return x * y;
}

let mul1 = multiply(5, 5);
console.log(mul1);
let mul2 = multiply(5, 8);
console.log(mul2);




// sorter syntax 

const square = x => x * x;

let sq = square(2, 2);
console.log(sq);



