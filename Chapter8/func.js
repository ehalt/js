

// -------- how to use function ----------

//  ---------- how to invoke a function ---------

// function add() {
//     var a = 10
//     var b = 20
//     console.log(a + b)
// }
// add()


// ---- arguments and parameters ----

// function add(a, b) {
//     var result = a + b
//     console.log(result)
// }
// add(10, 20)
// add(7, 30)
// add(500, 700)


// var arr1 = [1, 2, 3]
// var arr2 = [5, 7, 3, 10]
// var arr3 = [9, 7, 1, 5, 7]

// var sum1 = 0
// for (var i = 0; i < arr1.length; i++) {
//     sum1 += arr1[i]
// }
// console.log(sum1)

// var sum2 = 0
// for (var i = 0; i < arr2.length; i++) {
//     sum2 += arr2[i]
// }
// console.log(sum2)

// var sum3 = 0
// for (var i = 0; i < arr3.length; i++) {
//     sum3 += arr3[i]
// }
// console.log(sum3)


// function sumOfArray(arr) {
//     var sum = 0
//     for (var i = 0; i < arr.length; i++) {
//         sum += arr[i]
//     }
//     console.log(sum)
// }
// sumOfArray(arr1)
// sumOfArray(arr2)
// sumOfArray(arr3)


// -------- argument objects in js ------------

// function test(a, b, c) {
//     // console.log(JSON.stringify(arguments))
//     console.log(arguments)
//     // console.log(typeof a)
// }

// // test()
// test(10,20,30)

// function test(a, b, c) {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }
// test(10, 20, 30)



// function test() {
//     for (var i = 0; i < arguments.length; i++) {
//         console.log(arguments[i])
//     }
// }
// test(10, 20, 30)

// function addAll() {
//     var sum = 0
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     console.log(sum)
// }
// addAll(1,2,3,4,5)
// addAll(1,3,2,4,5,2,33,44,55)


// ------ how to return anything from a function ------

// function addAll() {
//     var sum = 0
//     for (var i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     return sum
// }

// var result = addAll(1, 2, 3, 4)
// console.log(result)

// function person(name, email) {
//     return {
//         name: name,
//         email: email
//     }
// }

// var p1 = person('tori', 'darktoolblue@gmail.com')
// console.log(p1);


// ----- Function expression in javaScript ------

// var addition = function(a, b) {
//     return a + b
// }
// addition(10, 40)
// var another = addition
// console.log(another(5, 10))


// setTimeout(function () {
//     console.log('i will call after 5 seconds')
// }, 5000)



// function something(greet, name) {
//     function sayhi() {
//         console.log(greet, name)
//     }
//     sayhi()
// }
// something('Good morning', 'Torikus sadik')


// function something(greet, name) {
//     function getFirstName() {
//         if (name) {
//             return name.split(' ')[0]
//         }
//     }
//     var message = greet + ' ' + getFirstName()
//     console.log(message)
// }
// something('good morning', 'shakil babu')



// ------- what is function scoping ---------


// var a = 'abc'

// if (true) {
//     if (true) {
//         var b = 'i am b'
//     }
// }

// console.log(b)

// var a = 'abc'

// function x() {
//     var a = 20
    
//     function y() {
//         var a = 10
//         console.log(a)
//     }
//     console.log(a)
//     y()
// }
// x()





// function test(n) {

//     function a() {
//         return n % 3 === 0
//     }

//     function b() {
//         return n % 5 === 0
//     }

//     if (a() && b()) {
//         console.log(n + ' is divisible by both 3 and 5')
//     }
//     else {
//         console.log('not a valid number')
//     }
// }
// test(15)


