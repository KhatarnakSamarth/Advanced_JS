const fs = require("fs")

function fileChecker(filename) {
    fs.stat(filename, (err, stats) => {
        if (err) { console.log(err); return; }
        console.log(stats.size/1024, "KB\n")
        if((stats.size)/1024 > 120){
            console.log("File Greater than 120KB")
        }
        else{
            console.log("File accepted less than 120KB")
        }
    })
}


fileChecker("notes.txt")