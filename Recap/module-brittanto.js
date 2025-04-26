// ES module type 

// math.mjs
const add = function(a, b) {
    return a + b;
}

const sub = function(a, b) {
    return a - b;
}

export default {
    add,
    sub
}




// main.mjs

import cal from './math.mjs'

// destructing 
const {add, sub} = cal;

console.log(add(5, 3));
console.log(sub(5, 3));


