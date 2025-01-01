
// default parameter 

function say(message = "hi") {
    console.log(message);
}

say();
say("hello!");



// arguments vs parameters 

function add(a, b) {
    return a + b;
}
console.log(add(10, 20));



/* 
    in js parameter has a default value of 'undefined'
    if you dont' pass the argument into the function, 
    by default it's parameter will have 'undefined' 
*/

function say(message){
    console.log(message);
}

say();




// to avoid undefined 

function say(message) {
    message = typeof message != 'undefined' ? message : "hi";
    console.log(message);
}
say();




// another method that es6 provides

function say(message = "hi") {
    console.log(message);
}

say();
say(undefined);
say("hello world!");


// Evaluating default parameters

function put(toy, toybox = []) {
    toybox.push(toy);
    return toybox;
}
console.log(put('car'));
console.log(put('bike'));




// The arguments object 
function add(a, b = 1, c = 2) {
    console.log(arguments.length);
    return a + b + c;
}

console.log(add(10)); // 1
console.log(add(10, 20)); // 2 
console.log(add(10, 20, 30, 40)); // 4


// read again : https://www.javascripttutorial.net/javascript-default-parameters/









