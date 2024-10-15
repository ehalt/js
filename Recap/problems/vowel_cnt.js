// --- this is not the appropiate solution ---- 

// function countVowels(str) {
//     let cnt = 0;
//     let arr = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O',  'u', 'U'];
//     for (let i = 0; i < str.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[j] === str[i]) {
//                 cnt++;
//             }
//         }
//     }
//     console.log(cnt);
// }

// countVowels("Hello World");
// countVowels("JavaScript");
// countVowels("AEIOU");



// ==== this is okay ====


// function countVowels(str) {
//     let cnt = 0;
//     const vowels = 'aeiouAEIOU';

//     for (let i = 0; i < str.length; i++) {
//         if (vowels.includes(str[i])) {
//             cnt++;
//         }
//     }
//     console.log(cnt);
// }
// countVowels("Hello World");
// countVowels("JavaScript");
// countVowels("AEIOU");




/* in case of object  */


function countVowels(str) {
    const vowelCounts = {
        a : 0,
        e : 0,
        i : 0, 
        o : 0, 
        u : 0, 
        A : 0, 
        E : 0, 
        I : 0, 
        O : 0,
        U : 0
    };

    for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if (vowelCounts.hasOwnProperty(ch)) {
            vowelCounts[ch]++;
        }
    }
    console.log(vowelCounts);
}

countVowels("Hello World");