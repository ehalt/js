// 1
//  Nullish Coalescing (??)

const user = {
    name : null,
    age : 23
}

const username = user.name ?? 'guest'
console.log(username)


// 2
// optional chaining ( ? )

const address = user?.contact?.address?.city;
console.log(address)


//3 
// Template literals 
var username = "saurabh"
var entries = 1567
const message = `Hello, ${username}!, Welcome to dashboard you have ${entries} left`;


// 4 
// Default param
function greet(name = 'Guest') {
    console.log(`Hello, ${name}!`);
}

// 5
// array spread operator 
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
const newArray =  [...arr1, ...arr2]
console.log(newArray)



// 6

// array filtering 

const adults = URLSearchParams.filter(user => user.age >= 18)

// 7 
// array mapping 

const names = users.map(user => user.name)


// 8 
// debouncing 

const debounce = (func, delay) => {
    let timeout;
    return(...args) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};


// 9

// Throtling 

const throttle = (func, limit) => {
  let lastFunc;
  let lastRan;
  return (...args) => {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
};





// 10 
// promise.all 

const results = await Promise.all([fetchData1(), fetchData2()]);


// 11
// Memoization

const memoize = fn => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (!cache[key]) cache[key] = fn(...args);
    return cache[key];
  };
};



// 12
// String methods 

if (str.startsWith('hello')) console.log('Greeting detected!')

// 13
// number methods 

const num = Number.parseInt('42', 10)
console.log(num)

// 14
// Intl for formatting 
const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency:'USD'});
console.log(formatter.format(1000));



// 15 
// set 

const unique = new Set([1, 2, 3, 1]);
console.log(unique)



