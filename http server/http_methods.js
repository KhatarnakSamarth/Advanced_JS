import http from 'http'
import fs from "fs"

let jsondata = JSON.parse(fs.readFileSync("config.json", 'utf-8'));

const server = http.createServer((req, res) => {
    console.log("Server Responded at http://127.0.0.1:3000");

    if (res.statusCode == 200) {
        const headers = new Headers({ "content-type": 'text/html', "Custom-header": 'This is my header' });
        res.setHeaders(headers);
    }

    switch (req.url) {
        case '/config':
            const headers = new Headers({ "content-type": 'application/json', "Custom-header": 'This is my header' });
            res.setHeaders(headers);
            res.end(JSON.stringify(jsondata));
            break;

        default:
            res.end("Other response");
    }
})

server.listen(3000, "127.0.0.1", () => {
    console.log("Server started");
})