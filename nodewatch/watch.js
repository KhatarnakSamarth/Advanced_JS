// const fs = require('fs');

// const watcher = fs.watch('intro.txt', (eventType, filename) => {
//     console.log('Event:', eventType);
//     console.log('Filename:', filename);
// });

// setTimeout(()=>{
//     watcher.close()
//     console.log("watcher closed")
// },5000)


const fs = require("fs");

const watcher = fs.watchFile("intro.txt", (curr,prev)=>{
    console.log("current:",curr.birthtime.toISOString())
    console.log("previous:",prev.birthtime.toISOString())
}, 5000);

