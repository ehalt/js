

// for loop


// for (var i = 0; i < 10; i++) {
//     console.log((i + 1) + ' Torikus sadik')
// }

// syntax

// for (initializer , condition, increment) {

// }


// even number 
// for (let i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i)
//     }
// }

// odd number 

// for (var i = 0; i < 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i)
//     }
// }


// let sum = 0
// for (let i = 0; i < 10; i++) {
//     sum += i
//     console.log(sum)
// }


// let sum = 0
// for (let i = 0; i < 10; i++) {
//     console.log(sum + ' + ' + i + ' = ' + (sum + i))
//     sum += i
// }
// console.log('result: ' + sum)


// ----- while loop -----

// var i = 0
// while( i < 10) {
//     console.log('torikus sadik')
//     i++
// }


// var isRunning = true

// while (isRunning) {
//     var rand = Math.floor(Math.random() * 10 + 1)
//     if (rand === 9) {
//         console.log('winner winner chicken dinner')
//         isRunning = false
//     }
//     else {
//         console.log('You got ' + rand)
//     }
// }


//  ------ do while loop -------

// var isRunning = false

// while (isRunning) {
//     console.log('I am running')
// }

// do {
//     console.log('I am Running')
// } while(isRunning)



// ----- nested loop -----




// 1
// 1 2 
// 1 2 3 
// 1 2 3 4
// 1 2 3 4 5


// n = 5
// for (var i = 1; i <= n; i++) {
//     var result = ''
//     for (var j  = 1; j <= i; j++) {
//         result += j + ' '
//     }
//     console.log(result) 
// }


// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// var n = 5
// for (var i = 1; i <= n; i++) {
//     var result = ''
//     for (var j = 1; j <= n; j++) {
//         result = result + '* '
//     }
//     console.log(result)
// }


// function multiplyAll (arr) {
//     let product = 1
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
//     return product
// }
// multiplyAll([[1,2],[3,4,5],[6,7,8,9]])



// function multiplyAll(arr) {
//     let product = 1
//     for (let i = 0; i < arr.length; i++) {
//         console.log(`sub array ${i}: ${arr[i]}`)
//         for (let j = 0; j < arr[i].length; j++) {
//             product = product * arr[i][j]
//         }
//     }
//     return product
// }
// multiplyAll([[1,2],[3,4,5],[6,7,8,9]])

// var arr = [[1,2], [3,4,], [5,6]]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         console.log(arr[i][j])
//     }
// }

// from another source: https://www.youtube.com/watch?v=piKpw_CghS8&ab_channel=CalebCurry

// for (let i =  0; i < 10; i++) {
//     for (let j = 0; j < 10; j++) {
//         console.log(i, j)
//     }
// }

// another example


// for (let i =  0; i < 10; i++) {
//     for (let j = i; j < 10; j++) {
//         console.log(i, j)
//     }
// }



// -------- break statement ----------

// while (true) {
//     var rand = Math.floor( Math.random() * 10 + 1)
//     if (rand === 9) {
//         console.log('Winner winner chicken dinner')
//         break
//     }
//     else {
//         console.log('You have got ' + rand)
//     }
// }


// for (let i = 1; i < 10; i++) {
//     if (i % 5 ===0) {
//         break
//     }
//     else {
//         console.log(i);
//     }
// }

