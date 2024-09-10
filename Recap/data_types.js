// js data types 

/*
        javaScript has 8 datatypes 

        string
        number
        bigint
        boolean
        undefined
        null
        symbol
        object
*/




// Dynamic and weak typing 

let foo = 12;
foo = 'bar';
foo = true;

console.log(foo);




// javascript coerces foo to a string, so it can be concatenated with the other operand 
const foo = 12;
const result = foo + '1';
console.log(result);




// js string 

// double quote 
let carName = "BMW";
// single quote 
let carName2 = 'Volvo';



// typeof operator 

console.log(typeof "" );
console.log(typeof "Torikus");
console.log(typeof 0)
console.log(typeof 3.14)
console.log(typeof (3 + 4));




// js object 

const car = {
    name : "Fiat",
    model : 500, 
    weight : "850kg",
    color: "white",
    start : function() {
        console.log('Car has started!');
    },
    drive : function() {
        console.log(`Car is driving!!`);
    },

}
console.log(car.name);
console.log(car.model);
console.log(car.weight);
console.log(car.color);
// console.log(car["start"]());
car.start();
car.drive();





// using the new Object() constructor 

const person = new Object();
person.name = "Torikus";
person.age = 22;

console.log(person.name);
console.log(person.age);



// nested object 

const person = {
    name:"torikus",
    age: 24,
    address: {
        street: "123 nakhalpara",
        city: "Dhaka",
        zip: 1032,
    }
};



console.log(person.name);
console.log(person.address.city);
console.log(person.address.street);





// ================================================= object properties ======================================================






// accessing js properties 

var age = person.age;
var age = person["age"];

// adding new properties 

person.nationality = "English";




// deleting properties 

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

delete person.age;

console.log(person);





// ============================== js object display ================================

// Object.values()

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

const my_arr = Object.values(person);
console.log(my_arr);



// ==================================== javascript object constructor ==========================================

/*

    javascript object constructors are a fundamental concept in object-oriented programming
    in javascript. they are used to create and initialize objects with a particular 
    structure and behavior 


*/



// function constructor 

function person(name, age) {
    this.name = name;
    this.age = age;
}

const tori = new person('Torikus', 24);
console.log(tori.name);
console.log(tori.age);



// es6 classes 

class person { 
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const tori = new person('Torikus', 24);
console.log(tori.name);
console.log(tori.age);





// adding methods 

function person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return `hello, my name is ${this.name}`;
    };
}; 

const tori = new person('Torikus', 24);
console.log(tori.greet());





// class example 

class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        return `Hello, my name is ${this.name}`;
    }
}
const shakil = new person("Shakil babu", 23);
console.log(shakil.greet());





