// js let 

if (true) {
    let x = 6;
    console.log(x);
}

console.log(x);



// another difference

let x = 10;
{
    let x = 2;
    console.log(`inside the block = ${x}`);
}

console.log(`outside the block = ${x}`);



// var vs let 

car_name = "bmw";
let car_name;
console.log(car_name);


// cannot
car_name = "volvo";
let car_name;
console.log(car_name);


