// Function Sequence
// JavaScript functions are executed in the sequence they are called. Not in the sequence they are defined.


function stepOne() {
    console.log("i am step one");
}
function stepTwo() {
    console.log("I am step two");
}
stepTwo();
stepOne();



// a bit more complex

function startEngine() {
    console.log("1. key turned.");
    checkFuel();
    console.log("3. Engine roaring.");
}

function checkFuel() {
    console.log("2. Fuel levels look good.");
}

startEngine();


// Callbacks (Functions as Arguments)

function processData(callback) {
    console.log("Fetching data...");
    callback();
}
function showFinishedMessage() {
    console.log("Task complete!");
}
processData(showFinishedMessage);





// task 1 

function initiate() {
    console.log("Initiate started");
    prepare();
    console.log("Initiate finished");
}

startProcess();

function startProcess() {
    console.log("Process start");
    initiate();
}


function prepare() {
    console.log("preparing...");
}

console.log("Final line!");





// task 2 

let status = "Inactive";

function checkStatus() {
    console.log("Current status: " + status);
}

function updateStatus() {
    status = "Loading...";
    checkStatus();
    status = "Active";
}

status = "Preparing";

checkStatus();
updateStatus();
checkStatus();





// task 3 [ " hidden identitiy " puzzle ]

let score = 10;

function multtiplyScore() {
    let score = 5;
    score = score * 2;
    console.log("Inside multiply: ", score);
}

function addScore() {
    score = score + 5;
    console.log("Inside add: ", score);
}

console.log("Start score:", score);

multtiplyScore();
addScore();
console.log("Final score: ", score);





let balance = 100;

function calculateTax(amount) {
    return amount * 0.1;
}

function processWithdrawal(request) {
    let tax = calculateTax(request);
    balance = balance - (request + tax);
    console.log("Withdrawal processed.");
}

console.log("Initial: ", balance);
processWithdrawal(50);
console.log("Final Balance:", balance);


/*
    Initial: 100
    withdrawal processed.
    Final balance: 45
*/







// another puzzle

let systemStatus = "Offline";

function toggleSystem(power) {
    if (power === "on") {
        systemStatus = "Online";
        return true;
    }
    else {
        return false;
    }
}

function runDiagonostics(isSystemReady) {
    if (isSystemReady) {
        console.log("Diagnostics: All clear.");
    } else {
        console.log("Diagnostics: Critical Error!");
    }
}

let attempt1 = toggleSystem("off");
runDiagonostics(attempt1);

let attempt2 = toggleSystem("on");
runDiagonostics(attempt2);

console.log("Final system status: ", systemStatus);









// shopping cart puzzle

let total = 0;
let taxRate = 0.1;

function addItems(price, quantity) {
    total = price * quantity;
}

function applyTax() {
    total = total + (total * taxRate);
}

addItems(10, 2);
console.log(`Current total: ${total}`);

applyTax();
console.log(`Total with Tax: ${total}`);

total = 0;
console.log("Final Total:", total);




