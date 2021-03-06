// javaScript function 


// function say(message) {
//     console.log(message);
// }
// let result = say('Assalamu alaikum');
// console.log(result);


// function add(a, b) {
//     return a + b;
// }
// let sum = add(10, 12);
// console.log('Sum is : ', sum);



// function compare (a, b) {
//     if(a > b) {
//         return - 1;
//     }
//     else if ( a < b) {
//         return 1;
//     }
//     return 0;
// }
// let result = compare(12, 10);
// console.log(result);



// function add(a, b) {
//     return a + b;
// }

// let sum = add ;

// function average(a, b, fn) {
//     return fn(a, b) / 2;
// }
// let result = average(10, 20, sum);
// console.log(result);







// function compareBy(propertyName) {
//     return function(a, b) {
//         let x = a[propertyName],
//             y = b[propertyName];

//         if (x > y) {
//             return 1;
//         }
//         else if(x < y) {
//             return -1;
//         }
//         else {
//             return 0;
//         }
//     }
// }








function compareBy(propertyName) {
    return function(a, b) {
        let x = a[propertyName],
            y = b[propertyName];

        if (x > y) {
            return 1;
        }
        else if(x < y) {
            return -1;
        }
        else {
            return 0;
        }
    }
}

let products = [
    {name: 'iPhone', price : 900},
    {name : 'Samsung galaxy', price : 850},
    {name : 'Sony Xperia', price: 700},
];

// sort products by name:

console.log('Products sorted by name: ');
products.sort(compareBy('name'));

console.table(products);


// sort products by price:

console.log('Products sorted by price');
products.sort(compareBy('price'));
console.table(products);