// javaScript arthmetic operators


let sum = 10 + 12;
console.log(sum);

let sum2 = 10 - 5 ;
console.log(sum2);

let sum3 = 10  * 3;
console.log(sum3);

let sum4  = 40 / 3;
console.log(sum4);

console.log('====================-==================');


// using javaScript arthemtic operators with objects 


let energy = {
    valueOf() {
        return 100;
    },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);

currentEnergy = energy + 100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);

currentEnergy = energy * 1.5;
console.log(currentEnergy);