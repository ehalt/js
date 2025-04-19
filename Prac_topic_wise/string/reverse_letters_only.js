function reverseOnlyLetters(str) {
    let len = str.length;
    var tmpstr = "";
    for (let i = 0; i < len; i++) {
        let char = str.charAt(i);
        if (char >= 'A' && char <= 'Z' || char >= 'a' && char <= 'z') {
            tmpstr += char;
        }
    }
    // str reverse 
    let reversed = tmpstr.split('').reverse();
    let result = "";
    let letterIndex = 0;
    // build the final string 
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
            result += reversed[letterIndex];
            letterIndex++;
        }
        else {
            result += char;
        }
    }
    return result;
}

let str = "$$AaaAAA";
let ans = reverseOnlyLetters(str)
console.log(ans)
