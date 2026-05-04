// map 
// set 
// weakmap
// weakset



// map

const user = new Map();

user.set("name", "kus");
user.set("age", 22);

console.log(user.get("name"));
console.log(user.get("age"));



const cache = new Map();
function fetchData(id) {
    if (cache.has(id)) return cache.get(id);

    const data = "API result " + id;
    cache.set(id, data);
    return data;
}



// set example 

const ids = new Set();
ids.add(1);
ids.add(2);
ids.add(2); // ignored
console.log(ids);



// remove duplicates
const numbers = [1, 2, 3, 2];
const unique = [...new Set(numbers)];
console.log(unique);





// weakmap ( memory friendly map ) 

let obj = {};
const wm = new WeakMap();
wm.set(obj, "secret");
obj = null;

console.log(wm);



const sayings = new Map();
sayings.set("dog", "woof");
sayings.set("cat", "meaw");
sayings.set("elephant", "tooot");
console.log(sayings.size); // 3

console.log(sayings.get("dog"));
console.log(sayings.get("fox"));
console.log(sayings.get("bird"));
console.log(sayings.has("bird"));
console.log(sayings.has("cat"));





const map = new Map();
map.set('a', 1);
map.set('b', 2);
for (let [key, value] of map) {
    console.log(key, value);
}



const map = new Map([
    ['name', 'Kus'],
    ['role', 'developer']
]);

// key + values 

for (let [key, value] of map) {
    console.log(key, value);
}




const map = new Map([
    ['name', 'Kus'],
    ['role', 'developer']
]);

// only keys

for (let key of map.keys()) {
    console.log(key);
}




// ==================================================================================
// practical use case 
// ==================================================================================




