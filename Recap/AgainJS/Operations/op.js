const name = "Alice";
const age = 30;
const person = {name, age}

console.log(person)






// Array spread/Rest:

const arr1 = [1, 2, 3]
const arr2 = [...arr1, 4, 5]

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}




// more about rest 

function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    }
    return total;
}

console.log(sum(1, 2, 3, 4))



// reduce example 

const array1 = [1, 2, 3, 4];

const initialval = 0
const sumwithInitital = array1.reduce((accumulator, currentvalue) => accumulator + currentvalue, initialval);
console.log(sumwithInitital);



// optional chaining example 

const user = {
    name: "Alice",
    address: {
      street: "123 Main St",
      city: "Anytown"
    }
  };


const street = user && user.address ? user.address.street : undefined;
console.log(street)
const street2 = user?.address?.street;
console.log(street2)






