
function reverseString(str) {
    let s = '';
    for (let i = str.length - 1; i >= 0; i--) {
        s += str[i];
    }
    console.log(s);
}

reverseString("hello");