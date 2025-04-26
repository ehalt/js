let p = new Promise((resolve, reject) => {
    let a = 1 + 4;
    if (a == 2) {
        resolve("success!!");
    }
    else {
        reject("Failed!!");
    }
})

p.then((msg) => {
    console.log(msg)
}).catch((msg) => {
    console.log(msg)
})





const userLeft = false;
const userWatchingCatMeme = true;

function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left', 
            message: ':('
        })
    }
    else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User watching cat memes',
            message: 'WebDevSimplified < Cat'
        })
    }
    else {
        callback('Thums up and subscribe')
    }
}

watchTutorialCallback((message) => {
    console.log(message)
}, (error) => {
    console.log(error.message);
})







const p = new Promise((resolve, reject) => {
    const success = false;
    if (success) {
        resolve("Operation succeeded!");
    }
    else {
        reject("Operation failed!");
    }
})


p.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
})







// real world example 

function fetchUserData(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userId > 0) {
                const user = {
                    id: userId,
                    name: "Jane Doe",
                    email: "janedoe@gmail.com"
                };
                resolve(user);
            }
            else {
                reject("Invalid user ID");
            }
        }, 1000)
    });
}


fetchUserData(123).then((user) => {
    console.log("user datA: ", user );
}).catch((error) => {
    console.log("Error", error);
})











const fp = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",);
console.log(fp)

fp.then((response) => {
    console.log('received: ', response.status);
});
console.log("started request...");






function fetchData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                const user = {
                    id : id,
                    name: "jane alam",
                    email: "janealam@gmail.com",
                };

                resolve(user);
            }
            else {
                reject(`Invalid user id!`);
            }
        }, 1000);
    });
}

fetchData(2).then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error)
})
