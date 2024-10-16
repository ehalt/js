// formatting decimal places 


function sol(num) {
    let n = num.toFixed(2);
    let to_num = +n;
    return to_num;
}
console.log(sol(5.3878348));


// another approach 


function sol(num) {
    return Number(num.toFixed(2));
}
console.log(sol(5.3878348));


// another approach 


function sol(num) {
    return Math.round(num * 100) / 100;
}
console.log(sol(5.3878348));




//  another approach 

function sol(n) {
    return +n.toFixed(2);
}
console.log(sol(5.3878348));



// another approach 


function sol(n) {
    return parseFloat(n.toFixed(2));
}
console.log(sol(5.3878348));



