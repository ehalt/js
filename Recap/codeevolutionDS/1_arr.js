/*

An array is a data structure that can hold a collection of values 

Arrays can contain a mix of different data types. You can store strings, booleans, numbers or even objects all in the same array.

Array are resizeable.You don't have to declare the size of an array before creating it. 

JAvascript arrays are zero-indexed and the insertion order is maintained

Arrays are iterables. they can be used with a for loop 


*/


// push()

const arr = [1, 2, 3, 'tori'];
arr.push(4);
for (let e of arr) {
    console.log(e);
}


// unshift()
const arr = [1, 2, 3, 'tori'];
arr.push(4);
arr.unshift(0);
for (let e of arr) {
    console.log(e);
}


// shift()
const arr = [1, 2, 3, 'tori'];
arr.push(4);
arr.unshift(0);
arr.shift();
for (let e of arr) {
    console.log(e);
}



// ============================ array methods ===============================

// map() 

/*
you can create a javaScript Map by :
    - passing an Array to new Map();
    - create a Map ans use Map.set();
*/

// the new Map() method

const fruits = new Map([
    ["tomato", 150],
    ["banana", 40],
    ["oranges", 350]
]);

console.log(fruits.get("banana"));



// set()

const fruits = new Map();
// set map values
fruits.set("tomato", 150);
fruits.set("banana", 40);
fruits.set("pineapple", 80);

console.log(fruits.get("tomato"));


// typeof()

const fruits = new Map();
fruits.set("banana", 40);
console.log(typeof fruits);




// array.map(callback(element, index, array))

const numbers = [1, 2, 3, 4, 5];
const sqr_num = numbers.map(function(number) {
    return number * number;
})
console.log(sqr_num);



// instanceof

const fruits = new Map();
fruits.set("banana", 40);
fruits.set("Tomato", 150);

console.log(fruits instanceof Map);
console.log(fruits instanceof Array);


// size

const fruits = new Map();
fruits.set("bedena", 650);
fruits.set("komola, 350");
console.log(fruits.size);



// delete()

const frt = new Map();
frt.set("banana", 40);
frt.set("guava", 80);
frt.set("hey", 12);
frt.delete("hey");
console.log(frt);

// another example 

const frt = new Map();
frt.set("banana", 40);
frt.set("guava", 80);
frt.set("hey", 12);
frt.delete("hey");
frt.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});


// another example 

const frt = new Map([
    ["komola", 350],
    ["batabi lebu", 70],
    ["peyara", 80],
    ["kola", 40]
]);

frt.forEach((value, key) => {
    // console.log(`${key}: ${value}`);
    console.log(value);
});


// clear()

frt.clear();
console.log(frt);


// has()


const frt = new Map([
    ["komola", 350],
    ["batabi lebu", 70],
    ["peyara", 80],
    ["kola", 40]
]);

console.log(frt.has("kola"));




// entries()

const mp = new Map();
mp.set("kola", 40);
mp.set("komola", 350);

const entries = mp.entries();
for (const entry of entries) {
    console.log(entry);
}



// keys()

const frt = new Map([
    ["komola", 350],
    ["batabi lebu", 70],
    ["peyara", 80],
    ["kola", 40]
]);

let text = '';
for (const x of frt.keys()) {
    console.log(x);
}











