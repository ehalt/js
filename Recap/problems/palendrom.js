/*
function isPalindrome(str) {
    let toLower = str.toLowerCase();
    let main_str = toLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()'? ]/g, "");

    function str_reverse(s) {
        str = '';
        for (let i = s.length - 1; i >= 0; i--) {
            str += s[i];
        }
        return str;
    }

    
    let r_str = str_reverse(main_str);
    if (main_str === r_str) {
        return true;
    }
    else {
        return false;
    }

}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Madam"));
*/


// ======= easy way === ===


function isPalindrome(str) {
    let main_str = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    let r_str = main_str.split('').reverse().join('');

    return {
        cleaned: main_str,
        isPalindrome: main_str === r_str
    };
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Hello"));
console.log(isPalindrome("Madam"));