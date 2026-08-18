console.log("====== Synchronous Start =====")
for (let i = 0; i < 5; i++) {
    console.log(`${i}`);
}


console.log("====== Synchronous End =====")

console.log("====== Asynchronous Start =====")
setTimeout(() => {
    console.log("This message appears after 5 seconds;")
}, 5000);

console.log("====== Asynchronous End =====")
