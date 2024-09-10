

// string length

let text = "kasdkfjaskldfjaklsdjflasdjfklasjdkl";
console.log(text.length);



/*
    escape sequences
    \b      backspace
    \f      form feed
    \n      new line 
    \r      carriage return
    \t      horizontal tab
    \v      vertical tabulator 
*/




// ================= string methods ==================


// string chatAt()

let text = "hello world";
let char = text.charAt(1);
console.log(char);



// charCodeAt()

let text = "diwana";
let char = text.charCodeAt(1);
console.log(char);


// string at()

const name = "Torikus";
let letter = name.at(3);
console.log(letter);


/*
    slice(start, end)
    substring(start, end)
    substr(start, length)

*/



let text = "apple, banana, kiwi";
let part = text.slice(7,13);
console.log(part);


// if you ommit the second param, the method will slice the rest string

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);

console.log(part);



// substring()

let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13);
console.log(part);



// substr()

let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6);
console.log(part);



// trim()

let text = "                 hello world!";
let txt2 = text.trim();
console.log(txt2);



// trimStart()

let text1 = "     Hello World     !";
let text2 = text1.trimStart();
console.log(text2);



// trimEnd()

let text1 = "     Hello World! ";
let text2 = text1.trimEnd();
console.log(text2);



// padStart()

let text = "5";
let padded = text.padStart(4, "0");
console.log(padded);



// padEnd()

let txt = "5";
let padded = txt.padEnd(4, "0");
console.log(padded);


// repeat()

let txt = "hello there!";
let result = txt.repeat(2);
console.log(result);



// replace()

let txt = "please visit google";
let new_txt = txt.replace("google", "SouthEast");
console.log(new_txt);



