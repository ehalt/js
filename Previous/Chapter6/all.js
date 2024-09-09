

// --------- Array and it's usages in javaScript -------

// --- what is Array -----

// Array is a data Structure  where we can organize multiple data under a single variable

// var arr = [1, 2, 3, 4, 5]
// console.log(arr)
// console.log(arr[2])
// arr[4] = 10
// console.log(arr)
// console.log(arr.length)

// var arr2 = Array()
// var arr2 = Array(1,2,3,4,5,6,7)
// console.log(arr2)

// -------- Traverse an Array -------


// var arr = [2, 3, 4, 6, 7, 9, 11, 34, 12, 32, 24, 11, 13] 

// arr[0] 
// arr[1] 
// arr[2] 
// arr[3] 
// arr[arr.length - 1] 

// for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i])
//     arr[i] = arr[i] + 2
// }
// console.log(arr)

// total of the array

// var sum = 0
// for (var i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
// }
// console.log(sum)


// print only even numbers from this array

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//     }
// }

// total of even numbers 

// var sum = 0
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         console.log(arr[i])
//         sum = sum +  arr[i]
//     }
    
// }
// console.log(`sum of the array: ${sum}`)

// var arr = [2, 3, 4, 6, 7, 9, 11, 34, 12, 32, 24, 13] 

// print odd numbers only

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 1) {
//         console.log(arr[i])
//     }
// }

// print sum of odd numbers

// let num = 0
// for (let i = 0; i < arr.length; i++ ){
//     if (arr[i] % 2 === 1) {
//         console.log(arr[i])
//         num = num + arr[i]
//     }
// }
// console.log(`Sum of all odd numbers : ${num}`)



// ---------- insert, and remoe  element ----------

// var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// arr.push(9)
// arr.unshift(9)
// arr.splice(3, 0, 9 , 10 , 11)
// arr[3] = undefined
// arr.pop()
// arr.shift()
// arr.splice(3, 1)
// arr.splice(3, 1, 44)
// console.log(arr)


// ---------- how to search data from an Array --------

// var arr = [4, 7, 2, 6, 8, 4, 55, 9, 89, 27] 

// var find = 8
// var isFound = false
// for ( var i = 0; i < arr.length; i++) {
//     if (arr[i] === find) {
//         console.log('Data Found at index ' + i)
//         isFound = true
//         break
//     }
// }
// if (!isFound) {
//     console.log('did not found any data :(')
// }


// -------- Multi dimensional array --------

// var arr = [
//     [78, 71, 90, 80],
//     [90, 75, 60, 65],
//     [40, 45, 95, 90]
// ]
// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])

// console.log(arr[0][1])
// console.log(arr[1][2])

// for (var i = 0; i < arr.length; i++ ) {
//     for (var tori = 0; tori < arr[i].length; tori++) {
//         console.log('Element ' + i + ': ' + arr[i][tori])
//     }
// }


// --- how to reverse array element ----

// var arr = [1, 2, 3, 4, 5, 6, 7, 8] 
// for (var i = 0; i < (arr.length / 2); i ++) {
//     var temp = arr[i] 
//     arr[i] = arr[arr.length - 1 - i]
//     arr[arr.length - 1 - i] = temp
// }
// console.log(arr)
// console.log(arr.reverse())


// -------- Array methods provided by javaScript ---------

// var arr = [4, 5, 9, 6] 
// var arr2 = [5, 10, 45, 23]
// console.log(arr)
// console.log(arr.join(' '))
// console.log(arr.join(', '))
// arr.fill(0)
// console.log(arr)
// var arr3 = arr.concat(arr2)
// console.log(arr3)


// console.log(Array.isArray(arr))

// var arr2 = Array.from(arr)
// console.log(arr2)




// var a = [1, 2]
// var b = Array.from(a)
// b[0] = 5
// console.log(a)

