console.log(localStorage);

localStorage.setItem("username", "Torikus Sadik");
localStorage.setItem("password", "123345");

// how to get data

const username = localStorage.getItem("username");
const password = localStorage.getItem("password");
localStorage.removeItem("username");
console.log(`username: ${username} password: ${password}`);



// localStorage.clear();

const countries = ["Australia", "Bangladesh", "Nepal"];
localStorage.setItem("countries", JSON.stringify(countries));

// getItem(key)

const country = JSON.parse(localStorage.getItem("countries"));
console.log(country);
