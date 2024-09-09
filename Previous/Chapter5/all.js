// var str = 'something'
// var str2 = String('something')  // string constructor
// console.log(str2)


// var n = 10
// console.log(n)

// int to str

// var str = n + ''
// console.log(str);

// int to str - 2

// var str = n.toString(n)
// console.log(str)

// in to str - 3

// var str = String(n)
// console.log(str)

// var str = "This is a 'String'"
// var str = 'This is a \'String\''
// var str = 'This is a \nString'
// var str = 'This is a \tString'
// var str = 'This is a \\String'
// console.log(str)



// --------- String Comparison ----------

// var a = 'abc'
// var b = 'bcd'
// console.log(a === b)
// console.log(a < b)
// console.log(a > b)

// JavaScript uses lexicographic system to compare to string

// console.log('z' > 'Z')

// var a = 'aaaaaaZ'
// var b = 'aaaaaz'
// console.log(a > b) // false

// var a = 'aaaaaz'
// var b = 'aaaaaZ'  
// console.log(a > b) // true

// console.log('001' == 1)



// ---------- String methods provided by javaScript -----------

// var a = 'I am'
// var b = 'Torikus sadik'

// var c = a.concat(' ', b)
// console.log(c)

// structure:
// substr(start, length)
// var d = c.substr(13 , 3)
// console.log(d)

// console.log(c.charAt(5))
// console.log(c.startsWith('I'))
// console.log(c.endsWith('sadik'))

// var lower = 'torikus sadik'
// console.log(lower.toUpperCase())

// var upper = 'SHAKIL BABU'
// console.log(upper.toLowerCase())

// var tr = '      hey watsup      '

// var e = 'shakil babu is a great programmer'
// console.log(e.split(' '))



// ----------- how to get length of a string ---------

// var str = 'Some string'
// var str2 = str.charAt(3)
// console.log(str2)
// console.log(typeof str2)

// without builtin function 


// var str = 'shakil babu'

// var length = 0

// while (true) {
//     if (str.charAt(length) == '') {
//         break
//     }
//     else{
//         length++
//     }
// }
// console.log(length)

// with builtin function 

// var str = 'shakil babu is a great programmer'
// console.log(str.length)

