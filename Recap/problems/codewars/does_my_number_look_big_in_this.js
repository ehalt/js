function narcissistic(value) {
    let to_string = value + '';
    let string_len = to_string.length;
    let sum = 0;
    for (let musan = 0; musan < string_len; musan++) {
      let to_number = +to_string[musan];
      sum += Math.pow(to_number, string_len);
    }
    return (value === sum ? true : false);
}




// another solution
function sol(val) {
    return ('' + val).split('').reduce(function(p, c) {
        return p + Math.pow(c, ('' + val).length)
    }, 0) == val;
}
console.log(sol(154));




// a bit better 

function sol(val) {
    let to_str = val + '';
    return to_str.split('').reduce(function(p, c) {
        return p + Math.pow(c, to_str.length)
    }, 0) == val;
}
console.log(sol(154));




