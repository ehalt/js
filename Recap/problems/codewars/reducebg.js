// reduce but grow : https://www.codewars.com/kata/57f780909f7e8e3183000078



// solution 1: 

function redu(arr) {
    let mul = 1;
    for (let i = 0; i < arr.length; i++) {
        mul *= arr[i];
    } 
    return mul;
}
console.log(redu([1, 2, 3, 4]));



// solution : 2

const grow = x => x.reduce((a, b) => a * b);
console.log(grow([1, 2, 3, 4]));




