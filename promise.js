const promise1 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({
            id: 73676463866487,
            username: 'John Doe'
        })
    }
    else {
        reject(new Error("Data not Fetched"))
    }
})


promise1.then(response => console.log(response)).catch(error => console.log(error.message))




const promise2 = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve({
            id: 73676463866487,
            username: 'John Doe'
        })
    }
    else {
        reject(new Error("Data not Fetched"))
    }
})


promise2.then(response => console.log(response)).catch(error => console.log(error.message))



// If All resolved, then Prints data of all
// Else Rejected, then prints Error of one getting Error
Promise.all([promise1, promise2])
.then((responses) => {
    console.log(responses);
})
.catch((error) => {
    console.log(error.message);
});


// If One resolved, then Prints data of that 
// Else Rejected, then prints Error of one getting Error
Promise.race([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });

// Returns An Array of status (Resolved or rejected) 
// and value of the Promise (Resoved message or Error Message)
Promise.allSettled([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });

Promise.any([promise1, promise2])
    .then((responses) => {
        console.log(responses);
    })
    .catch((error) => {
        console.log(error.message);
    });
