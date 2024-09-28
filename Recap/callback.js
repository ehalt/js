// fist example 


person1();
person2();

function person1() {
    console.log("I am person 1");
}

function person2() {
    console.log("I am person 2");
}


// anotehr example 


person1();
person2();

function person1() {
    setTimeout(function() {
        console.log("I am person 1");
    }, 3000);
}

function person2() {
    console.log("I am person 2");
}


// another example 


function greet(name) {
    console.log("hello, " + name);
}


function userinput (callback) {
    let name = "Torikus";
    callback(name);
}

userinput(greet);




// anotehr example 

function greet(name, callback) {
    console.log("hello " + name + "!");
    callback(name);
}

function bye(name) {
    console.log("Bye bye, ", name);
}

greet("Torikus", bye);



/*
    you have to study about:

    1. higher order function
    2. event handling 
    

*/



// another example 


function add (a, b) {
    return a + b;
}

function mul(a, b) {
    return a * b;
}

function calculate (x, y, callback) {
    return callback(x, y);
}

console.log("addition: " + calculate(2, 3, add));
console.log("multiplication: " + calculate(2, 3, mul));



