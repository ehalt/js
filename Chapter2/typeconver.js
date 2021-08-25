// type conversion 

var str = '1000'
var n = 10

console.log(str * n)
console.log(str + n)
console.log(Number(str))
console.log(Number.parseInt(str))
console.log(n.toString())

console.log(Boolean(Infinity))


// Falsy values:
// ''
// 0
// null
// undefined
// NaN

console.log(Boolean(''))
console.log(Boolean('jslkdjflksjd'))

console.log(Boolean(null))
console.log(Boolean(undefined))

console.log(0)
console.log(451)

console.log(Boolean(0))
console.log(Boolean(451))


console.log(true)
var x = true

console.log(x.toString())