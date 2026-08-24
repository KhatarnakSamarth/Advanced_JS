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


promise1.then(response => console.log(response)).catch(error => console.log(error))




const promise2 = new Promise((resolve, reject) => {
    let success = false;
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


promise2.then(response => console.log(response)).catch(error => console.log(error))

