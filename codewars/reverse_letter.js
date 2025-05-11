function reverseLetter(str) {
    let n = str.length;
    let str2 = '';
    for (let i = n - 1; i >= 0; i--) {
        if (/^[a-zA-Z]+$/.test(str[i])) {
            str2 += str[i];
        }
    }
    return  str2
}
let str = "tori234%"
let ans = reverseLetter(str)
console.log(ans)


// best apporach 

reverseLetter=(s)=>s.replace(/[^a-z]/gi,'').split('').reverse().join('');
