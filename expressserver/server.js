import http from 'http';
import fs from 'fs';

let data

const readStream = fs.createReadStream("index.html", { encoding: "utf8" });
readStream.on("data", (chunk) => {
    console.log(chunk)
    data = chunk
})


const server = http.createServer((req, res) => {
    console.log("hello");
    const order = {
        orderId: 10987,
        des: "Delhi",
        source: "Ghaziabad",
        username: "ABC"
    }
    res.writeHead(200, {
        "content-type": "application/html",
        "custom-header": "Hello ECE"
    })
    res.end(data)
    // res.statusCode = 200;
    // res.setHeader("content-type","application/json")
    // res.end("Hello Everyone");
});
server.listen(3000, "127.0.0.1", () => {
    console.log("server is running on http://127.0.0.1:3000/..");
});
