/*

    variable defined with const cannot be redeclared
    variables defined with const cannot be reassigned
    variables defined with const have block scope 

*/


// cannot be reassigned 

const PI = 3.141592;
PI = 3.14;
PI = PI + 10; 
console.log(PI);



/*

    when to use javascript const ? 

    - a new array
    - a new object
    - a new function
    - a new regExp


*/


// i can do these 
const cars = ["saab", "volvo", "bmw"];
cars[0] = "Toyota";
cars.push("Audi");
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}





// will give an error 
const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];



// block scope 

const x = 10;
{
    const x = 2;
    console.log(x);
}
console.log(x);




