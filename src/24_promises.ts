const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve('Hello World');
    }, 2000);
});

// returns after 2 seconds
promise.then((value) => console.log(value));