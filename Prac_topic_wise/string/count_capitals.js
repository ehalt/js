function cnt_capital(str) {
    let len = str.length;
    let cnt = 0;
    for (let i = 0; i < len; i++) {
        let char = str.charAt(i);
        if (char >= 'A' && char <= 'Z') {
            cnt++;
        }
    }
    return cnt;
}
let str = "Hello World!";
let ans = cnt_capital(str)
console.log(ans)

