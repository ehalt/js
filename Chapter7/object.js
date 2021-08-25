
// ------- object literal vs constructor ------

// var obj = {

// }
// console.log(typeof obj)

// var obj = {}
// obj.x = 10
// console.log(obj)

// var point = {
//     x : 10,
//     y: 20
// }
// point.y = 30
// point.z = 30
// console.log(point)

// var obj = Object()
// obj.a  = 10
// console.log(obj)

// var obj2 = new Object()
// obj2.b = 20
// console.log(obj2)



// ------- Accessing object properties in js -------

// var point = {
//     x : 10,
//     y : 20,
//     z : 30
// }
// dot notation

// console.log(point.x)
// console.log(point.x + point.y)

// array notation

// console.log(point['x'])
// console.log(point['y'])

// var show = 'z'
// console.log(point[show])



// ------ setting oject properties in js -------

// var point = {
//     x : 10,
//     y : 20,
//     z : 30
// }

// point.x = 50
// console.log(point)

// point['y'] = 100

// var prop = 'z'
// point[prop] = 55
// console.log(point)


// --------- remove object properties in js ---------

// var point = {
//     x : 10,
//     y : 20,
//     z : 30
// }

// point.a = undefined
// console.log(point)

// delete point.a
// console.log(point)




// --------- how to compare two objects ---------

// var obj1 = {
//     a : 10,
//     b : 20
// }

// var obj2 = {
//     a : 10,
//     b : 20
// }

// console.log(obj1 === obj2)
// if (obj1.a === obj2.a && obj1.b === obj2.b) {
//     console.log(true)
// }
// else {
//     console.log('fuck you!')
// }


// console.log(obj1)
// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))



// --------- how to iterate object properties in js ----------

// var obj = {
//     x : 40,
//     y : 60,
//     z : 75
// }

// console.log('x' in obj )

// for (var i in obj) {
//     console.log(i)
//     console.log(obj[i])
// }


// --------  object methods provided by js ---------

// var obj = {
//     x : 40,
//     y : 50,
//     z : 60
// }
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))


// var obj2 = obj
// obj2.x = 70
// obj2.y = 100
// console.log(obj)
// console.log(obj2)

// var obj2 = Object.assign({},obj)
// obj2.x = 100
// console.log(obj)
// console.log(obj2)

