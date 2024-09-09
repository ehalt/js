
// javaScript String 



// escaping special characters 


// To escape special characters you use the backslash \ character . for example 


let str = 'I\'m a string.';

let str1 = 'this is the examble of \nline break';

let str2 = 'this is an example of \t tab';



//                          =-= Getting the length of the string! =-=


// let name = 'Torikus Sadik';
// console.log(name.length);





//                =-= Accessing characters =-= 


// let he = "shakil";
// console.log(he[0]);
// console.log(he[1]);
// console.log(he[2]);
// console.log(he[3]);
// console.log(he[4]);
// console.log(he[5]);


// another way


let he = 'shakil';
console.log(he[he.length - 6]);
console.log(he[he.length - 5]);
console.log(he[he.length - 4]);
console.log(he[he.length - 3]);
console.log(he[he.length - 2]);
console.log(he[he.length - 1]);



//                     =-= concatenating string via + operator =-=


let name = 'john';
let fullname = name + ' Doe'
console.log(fullname);




//                       =-= converting value to string =-= 



let status = false;
let string = status.toString();
let back = Boolean(string);

console.log(back);




//                   =-= Comparing strings =-=


let result = 'a' < 'b';
console.log(result);

let result2 = 'a' < 'B';
console.log(result2);


