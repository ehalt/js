function greet(name, callback) {
    const greeting = "hello " + name + "!";
    callback(greeting);
}

function displayGreeting(message) {
    console.log(message)
}

greet("Alice", displayGreeting);









function delayGreeting(name, callback) {
    setTimeout(function() {
        const greeting = "hello " + name + "!";
        callback(greeting);
    }, 2000);
}

function displayGreeting(message) {
    console.log(message)
}

delayGreeting("Bob", displayGreeting);
console.log("waiting...");








function fetchData(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error("Error fetching data", error));
}

function processData(data) {
    console.log("Data reveived", data);
}

fetchData("https://jsonplaceholder.typicode.com/todos/1", processData)



