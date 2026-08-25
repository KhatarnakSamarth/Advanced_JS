import fs from "fs";

fs.readFile("server.txt", "utf8", (err,data)=>{
    console.log(data);
})

 setTimeout(() => {
    console.log("Set TimeOut Triggered");
 }, 3000);


setInterval(() => {
    console.log("Set Interval after 5ms")
}, 500);


setImmediate(()=>{                      
    console.log("Set Intermediate")
})
