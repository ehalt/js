// examples 

const numbers = [1, 2, 3, 4, 5, 6]
const even = numbers.filter(number => number % 2 == 0)
console.log(even)





// filtering strings 

const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
const longWords = words.filter(word => word.length > 5);
console.log(longWords)


// filtering objects 

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 20 },
    { name: 'David', age: 35 },
];

const adults = people.filter(person => person.age >= 21) 
console.log(adults)




// advance techniques [using index]

const numbers = [10, 20, 30, 40, 50];
const filteredNumbers = numbers.filter((number, index) => index % 2 === 0);
console.log(filteredNumbers);



// using array

const numbers = [1, 2, 3, 4, 5];
const average = numbers.reduce((a, b) => a + b, 0) 
const aboveAverage = numbers.filter((number, index, array) => number > array.reduce((a, b) => a + b))
console.log(aboveAverage);



const multiplier = {
    factor: 2,
    multiplyAndFilter(numbers) {
        return numbers.filter(function(number) {
            return number * this.factor > 5;
        }, this);
    },
};

const results = multiplier.multiplyAndFilter([1, 2, 3, 4, 5]);
console.log(results)



