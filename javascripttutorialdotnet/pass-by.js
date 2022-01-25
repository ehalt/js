// pass by value pass by reference 


// let shoppingList = ['mushrooms','banana','bread','spinach'];

// function addOneKilo(listItems) {
//     for(let i = 0; i < listItems.length; i++) {
//         listItems[i] = `1 kilo of ${listItems[i]}`;
//     }
// }

// let ans = addOneKilo(shoppingList);



function square(x) {
    x = x * x;
    return x;
}

let y = 10;
let result = square(y);
console.log(result);
