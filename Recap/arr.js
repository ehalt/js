// Array 

const cars = [];
cars[0] = "saab";
cars[1] = "volvo";
cars[2] = "BMW";

for (e of cars) {
    console.log(e);
}





const cars = new Array("saab", "volvo", "BMW");

for (car of cars) {
    console.log(car);
}




// Accessing the first array element 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[0];
console.log(fruit);




// Accessing the last array element 

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruit);



// nested array and object 

const myobj = {
    name : "Torikus",
    age : 24,
    cars: [
        {name: "Ford", models: ["Fiesta", "Focus", "Mustang"]},
        {name: "BMW", models: ["320", "x3", "x5"]},
    ]
}

// console.log(myobj.name);
// console.log(myobj.cars);
// console.log(myobj.cars[0].models);

for (model of myobj.cars[0].models) {
    console.log(model);
}




// ============================= Array methods =============================


// javascript array toString()

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let str = fruits.toString();
console.log(str);




