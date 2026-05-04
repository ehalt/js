
const state = {
    data: null,
    loading: false,
    error: null,
}

async function fetchUsers() {
    state.loading = true;
    state.error = null;

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
            throw new Error(`Request failed: ${res.status}`);
        }
        const data = await res.json();
        state.data = data;
        // console.log(state.data[0].name)
    }
    catch (error) {
        state.error = error.message;
    }
    finally {
        state.loading = false;
    }
}

fetchUsers();






const state = {
    data: null,
    loading: false,
    error: null,
}


async function fetchUsers() {
    state.loading = true;
    state.error = null;

    try {
        const res = await fetch()
    }
    catch {

    }
    finally {

    }
}


function mydisplayer(param) {
    console.log(param);
}

function myfirst() {
    mydisplayer("hello");
}

function myfsecond() {
    mydisplayer("Goodbye");
}
myfirst();
myfsecond();

sayhello();
function sayhello() {
    console.log("hello from the bottom!");
}



const sayhi = function() {
    console.log("hi!");
};
sayhi();



const myPizzaPromise = new Promise((resolve, reject) => {
    let isOvenWorking = false;

    if (isOvenWorking) {
        resolve("Pizza is ready!");
    }
    else {
        reject("Oven is broken!");
    }
});

myPizzaPromise.then((message) => {
    console.log("Success:" + message);
})
.catch((error) => {
    console.log("Error:" + error);
});


handle it with try and catch

