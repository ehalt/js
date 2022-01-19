// let formated = true;
// if (formated) {
//   console.log("The code is easy to read.");
// }



// let counter = 120; // counter is a number 
// counter = false ; // counter is now a boolean
// counter = "foo"; // counter is now a string 

// console.log(counter);


// let counter = 120;
// console.log(typeof(counter));

// counter = false;
// console.log(typeof(counter));

// counter = "hey shakil babua";
// console.log(typeof(counter));



// =-= the undefined type =-=

// let counter;
// console.log(counter);
// console.log(typeof(counter));


//  =-= the null type =-=

// let obj = null;
// console.log(typeof (obj));



// console.log(null == undefined)


// =-= the number type =-=


//  javascript always wants to use less memory since a floating point value uses twice as much 
// memory as an integer value;

// let num = 100;
// let discount = 0.05;
// let price = 200.00;
// console.log(Number.MAX_VALUE);
// console.log(Number.MAX_VALUE - Number.MAX_VALUE);



// =-=  NaN =-=

// The NaN has two special characteristics:
// 1. any operation with NaN returns NaN
// 2. The NaN does not equal any value, including itself;


// console.log(NaN / 2);
// console.log(NaN == NaN);


// =-= the string type =-=

// let greeting = 'hi';
// let s = "It's a valid string ";
// let str = 'I\'m also a string'; 

// console.log(str);



// =-= The boolean type =-=

// the boolean type has two values: 
// true
// false


// let inProgress = true;
// let completed = false;
// console.log(typeof completed);




// console.log(Boolean('hi'));
// console.log(Boolean(''));
// console.log(Boolean(20));
// console.log(Boolean(Infinity));
// console.log(Boolean(0));
// console.log(Boolean({foo: 100}));
// console.log(Boolean(null));


// =-= The symbol type =-=


// symbol type does not have a literal form
// to create a symbol you call the symbol function as follows:


// let s1 = Symbol();
// // console.log(s1)
// console.log(Symbol() == Symbol());


// =-= The BigInt type =-=

// The big int type represents the whole numbers that are larger than 2^53 - 1. 

// let bigInt = 9007199254740991n;
// console.log(bigInt);



// =-= the object type =-=

// let emptyObject = {};
// console.log(emptyObject);


// let person = {
//     firstname : 'Shakil',
//     lastname : 'babu'
// }
// console.log(person);
// console.log(person.firstname);
// console.log(person.lastname);



// let contact = {
//     firstname : 'shakil',
//     lastname : 'fahim',
//     enail : 'shakilfahimsaik@gmail.com',
//     phone : '0172245125454512545',
//     address: {
//         building : '3000',
//         street : 'North 1st street',
//         city : 'sariyamokamdina',
//         state : 'smd',
//         country: 'USA'
//     }
// }
// console.log(contact.address.building);


// ================== / Intro to the javaScript number / =================

// octal 


// let num = 071;
// console.log(num)


// let num = 080;
// console.log(num);



// this implicit behaviour might cause issues. Threfore , ES6 introduced a new octal literal
// that starts with the 0o followed by  sequence of octal digits (from 0 to 7) ex...


// let num = 0o71;
// console.log(num);

// let num = 0o80;
// console.log(num);


// decimal numbers 

// let discount = 0;
// let saleTax = 0.08;


// hexadecimal numbers 

// let num = 0x1a;
// console.log(num);


// floating point numbers 


// let price = 9.99;
// let tax = 0.08;
// let discount = .05;


// let amount = 3.14e7;
// console.log(amount);

// the notation 3.14e7 means that take 3.14 and multiply it by 10^7

// let amount = 0.0000005;
// console.log(amount);


//                intro to the javascript boolean type 


// let completed = true;
// let running = false;
// console.log(completed);
// console.log(running);


// let error = 'An error occured ';
// let hasError = Boolean(error);
// console.log(hasError);



// let error = 'An error occurred';
// if(error) {
//     console.log(error);
// }



// let error = '';
// if(error) {
//     console.log(error);
// }




//                               javaScript objects


// empty object

// let empty = {}
// console.log(empty);


// let person = {
//     firstName : 'torikus',
//     lastName : 'sadik'
// };

// console.log(person);

// accessing properties

// dot notation 


// let person = {
//     firstName : 'torikus',
//     lastName : 'sadik'
// };
// console.log(person.firstName);



//  Array like notation []

// let person = {
//     first : 'torikus sadik',
//     second : 'Shakil babu',
//     third : 'Ahm fahim'
// };

// console.log(person['third']);



// let address =  {
//     'building no' : 2345,
//     street : 'north 1st street',
//     state : 'CA',
//     country: 'bangladesh'
// }
// console.log(address['building no']);



// modifying the value of a property

// let person = {
//     first : 'john',
//     second : 'doe'
// };

// person.first = 'jane';
// console.log(person);



// adding a new property to an object 


// let person = {
//     name : 'ahm fahim',
//     roll : '112907',
// }

// person.age = 21;
// person.village = 'chakolma';
// console.log(person);



//           checking if a property exists



// let employe = {
//     first : 'peter',
//     last : 'pong',
//     employId : 1
// };

// console.log('ssn ' in employe);
// console.log('employeId' in employe);







