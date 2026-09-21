import http from 'http';
import fs from 'fs';
let page = fs.readFileSync("index.html", { encoding: "utf8" });

const server = http.createServer((req, res) => {
    console.log("hello");

    if (res.statusCode == 400){
        res.end(JSON.stringify({'error' : '404 Not Found'}))
    }

    res.writeHead(200, {
        "content-type": "text/html",
        "custom-header": "Hello ECE"
    })

    // const page = awatfs.readFile("index1.html", { encoding: "utf8" }, (err, data)=>{
    //     if (err) {
    //         return err.message
    //     }
    //         return data
    // });

    res.end(page)

});

server.listen(3000, "127.0.0.1", () => {
    console.log("server is running on http://127.0.0.1:3000/");
});
