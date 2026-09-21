
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

for (let i = 0; i < 5; i++) {
    console.log(`${i}`);
}


setTimeout(() => {
    console.log("This message appears after 5 seconds;")
}, 0);

console.log("The message")

