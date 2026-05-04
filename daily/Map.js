const mp = new Map();
mp.set('name', 'kus');
mp.set('age', 23);

console.log(mp.get('name'));


// with map, keys can be anything 

const mp = new Map();

mp.set(1, 'number key');
mp.set(true, 'boolean key');
mp.set({id: 1}, 'object key');

mp.forEach((value, key) => {
    console.log(`key is: ${key} and value is: ${value}`)
})


/*
map.set(key, value);   // add/update
map.get(key);          // retrieve
map.has(key);          // check existence
map.delete(key);       // remove
map.clear();           // remove all
map.size;              // number of items
*/


// imagine tracking user sessions

const sessions = new Map();

const user1 = {id: 1};
const user2 = {id: 2};

sessions.set(user1, 'active');
sessions.set(user2, 'inactive');

console.log(sessions.get(user1));




