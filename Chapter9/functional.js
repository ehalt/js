

// what is pure function 

// function sqr(n) {
//     return n * n
// }

// console.log(sqr(2))
// console.log(sqr(2))
// console.log(sqr(2))


// var n = 10

// function change() {
//     n = 100
// }
// console.log(n)




// First class function



// function add(a, b) {
//     return a + b
// }

// var sum = add
// console.log(sum(3, 5))
// function can be stored in an array
// var arr = []
// arr.push(add)
// console.log(arr)
// console.log(arr[0](5, 4))

// a function can be stored in an object

// var obj = {
//     sum : add
// }
// console.log(obj)
// console.log(obj.sum(11, 22))

// we can create function as need

// setTimeout(function () {
//     console.log('i have created this,,,,')
// }, 100)





// higher order functions in javaScript 


// function add(a, b) {
//     return a + b
// }

// function manipulate(a, b, func) {
//     var c = a + b
//     var d = a - b

//     function multiply() {
//         var m = func(a, b)
//         return c * d * m
//     }

//     return multiply
// }

// var multiply = manipulate(3, 4, add)
// console.log(multiply)




// First look at closure

// var b = 10

// function a() {
//     var x = 5

//     return function() {
//         console.log(x)
//     }
// }
// var abc = a()
// console.dir(abc)



// what is callback function ?

// function sample(a, b) {
//     var c = a + b
//     var d = a - b
//     var result = sum(c, d)
//     return result
// }

// function sum(a, b) {
//     return a + b
// }
// console.log(sample(5, 8))



// function greeting(name) {
//     console.log('hello' + name)
// }

// function processUserInput(callback) {
//     var name = ' torikus sadik'
//     callback(name)
// }
// processUserInput(greeting)


// function print(callback) {
//     callback()
// }

// function taskOne() {
//     console.log('task 1')
// }

// function taskTwo() {
//     console.log('taks 2')
// }

// setTimeout(taskOne, 2000)
// // setTimeout(taskTwo, )
// taskTwo()

// const message = function() {
//     console.log(`This message is shown after 3 seconds`)
// }

// setTimeout(message, 3000)

// setTimeout(function () {
//     console.log('This message is shown after 3 seconds')
// }, 3000)



// implementation of For each function

// var arr = [1,2,3,4,5]

// var sum = 0
// arr.forEach(function (value, index, arr) {
//     sum += value
// })
// console.log(sum)

// var arr = [1,2,3,4,5]
// function forEach(arr) {
//     for (var i = 0; i < arr.length; i++) {
//         console.log(arr[i])
//     }
// }
// forEach(arr)

// var arr = [1,2,3,4,5]

// function forEach(arr, cb) {
//     for (var i = 0; i < arr.length; i++) {
//         cb(arr[i])
//     }
// }

// var sum = 0
// forEach(arr, function(value) {
//     sum += value
// })

// console.log(sum)

// const nums = [1, 2, 3, 4, 5, 6, 7] 

// for (var i = 0; i < nums.length; i++) {
//     console.log(nums[i])
// }

// const nums = [1, 2, 3, 4, 5, 6, 7] 

// nums.forEach(function(nums){
//     console.log(nums)
// })

// const nums = [1, 2, 3, 4, 5, 6, 7] 
// nums.forEach(nums => console.log(nums))

// const nums = [1, 2, 3, 4, 5, 6, 7] 
// nums.forEach((nums, index) => {
//     console.log('Index: ' + index + ' Value: ' + nums)
// })

// const nums = [1, 2, 3, 4, 5, 6, 7] 
// nums.forEach((nums, index, array) => {
//     console.log(array)
// })

// const fruits = ['apple','banana','lichi', 'pineapple','jackfruit']
// fruits.forEach(function(fruits) {
//     console.log(fruits)
// })

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i])
// }


// const fruits = ['apple','banana','lichi', 'pineapple','jackfruit']
// for (const val of fruits) {
//     console.log(val)
// }

// let name = ['babu','morshed','torikus']
// name.forEach((entry) => {
//     console.log(entry)
// })



// -------- Implementation of Map Function ---------

// var arr = [1, 2, 3] 

// var sqrArr = arr.map(function (value) {
//     // return Math.random() * 100
//     return value * value
// })
// console.log(arr)
// console.log(sqrArr)


// var arr = [1, 2, 3, 4, 5]

// function myMap(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         var temp = arr[i] * arr[i]
//         newArr.push(temp)
//     }
//     return newArr
// }

// console.log(myMap(arr))



// var arr = [1, 2, 3, 4, 5]

// function myMap(arr, cb) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         var temp = cb(arr[i], i, arr)
//         newArr.push(temp)
//     }
//     return newArr
// }
// // console.log(myMap(arr))
// var qb = myMap(arr, function (value) {
//     return value * value * value
// })

// var mten = myMap(arr, function(value) {
//     return value * 10
// })

// console.log(arr)
// console.log(qb)
// console.log(mten)

// parallel Array

// var cats = new ParallelArray(['oswalad','luna','max'])
// cats.map(function (name) {
//     return "🐱" + cats
// })

// var porimoni = 100
// var raboffice = 20
// console.log(raboffice > porimoni);

// const person1 = {
//     name: 'john',
//     address : {
//         city : 'London',
//         country : 'England'
//     },
//     characteristics : {
//         height : 188,
//         age : 42
//     }
// }

// const person2 = {
//     name : 'Doe',
//     address : person1.address, 
//     characteristics : {
//         height : person1.characteristics.height,
//         age: 54
//     }
// }

// person1.address.city = 'Dublin'
// person1.address.country = 'ireland'
// person1.characteristics.height = 179

// console.log(person2.address.country)
// console.log(person2.characteristics.height)


