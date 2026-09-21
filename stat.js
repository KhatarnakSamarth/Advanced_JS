const fs = require("fs")

fs.stat("./myfolder", (err, stats) => {
    if (err) { console.log(err); return; }
    console.log(stats.size)
})

