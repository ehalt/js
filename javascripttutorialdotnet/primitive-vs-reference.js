
// javaScript primitive vs. Reference values


// javaScript has two different type of values 
// 1. primitive values 
// 2. Reference values


//             stack and heap memory 


let name = 'shakil';
let age = 21;

console.log(name);
console.log(age);



let name = 'torikus';
let age = 23;

let person = {
    name : 'torikus',
    age : 25,
};

console.log(name);
console.log(person['name']);
console.log(person.age);



//                      Dynamic properties

let person = {
    name : 'john',
    age : 24,
}

// add the ssn property
person.ssn = '123-232-423';

// change the name 

person.name = 'john doe'

// delete the age property

delete person.age;

console.log(person);



//            copying values


let age = 24;
let newAge = age;

console.log(newAge);



let age = 24;
let newAge = age;

newAge = newAge + 1;
console.log(age, newAge);



let person = {
    name : 'john',
    age : 25,
};

let member = person;
member.age = 26;

console.log(person);
console.log(member);