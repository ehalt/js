// 

function sol(text_before, ch) {
    let new_txt = '';
    for (let i = 0; i < text_before.length; i++) {
        let rep = text_before[i] = ch;
        new_txt += rep;
    }
    return new_txt;
}


// another approach 

function sol(text_before, ch) {
    return ch.repeat(text_before.length);
}
console.log(sol("abc", 'z'));

