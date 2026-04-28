// trim() 

let name = "    kus     ";
let trimmed = name.trim();
console.log(trimmed)



// accessing characters 

const str = "hello";
str.length;
str.charAt(1);
str[1]
str.at(-1)
str.charCodeAt(0)
str.codePointAt(0);



const text = "javaScript";
slice(start, end);
substring(start, end);
substr(start, length);



// prefer slice() 
const str = "javaScript";
let sliced = str.slice(-6);
console.log(sliced);


// prefer slice() 
const str = "javaScript";
let sub = str.substring(-6); // cause - ( negative ) becomes zero (0)
console.log(sub);





// changing case 
"hello".toUpperCase();
"HEY".toLocaleLowerCase();


// cleaning whitespaces 
const value = "     hello       ";
value.trim();
value.trimStart();
value.trimEnd();




// padding 

"5".padStart(2, "0");
"5".padEnd(3, ".");

// repeating 

"ha".repeat(3); // hahaha

// replacing texts
"one two one".replace("one", "1");
"one two one".replaceAll("one", "1");

// splitting String

"a,b,c".split(","); // will become an array 
"hello".split(""); // another array of characters



// ===================================== 
//            search methods          
// =====================================




// indexOf()

const str = "hello world hello";
let helloindex = str.indexOf("world");
console.log(helloindex)



// lastIndexOf()
const str = "hello world hello";
let lastindex = str.lastIndexOf("hello");
console.log(lastindex)



const str = "hello world hello";
if (str.includes("world")) {
    console.log("heyooo");
}






const str = "hello world hello";
if (str.includes("world")) {
    console.log("heyooo");
}

// startsWitch() / endsWith()

"hello world".startsWith("hello");
"hello world".endsWith("hello");




// real use case

const file = "image.png";
file.endsWith(".png");



/* 
        Checking → includes
        Position → indexOf
        Extraction → match
        Structure → matchAll
*/


