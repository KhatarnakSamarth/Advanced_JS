import http from 'http'
import fs from 'fs'

const server = http.createServer((req, res) => {
    console.log("Server Responded at http://127.0.0.1:3000")
    let page;
    switch (req.url) {
        case '/':
            page = fs.readFileSync("./site/index.html", { encoding: "utf8" });
            res.end(page)
            break;
        case '/about':
            page = fs.readFileSync("./site/about.html", { encoding: "utf8" });
            res.end(page)
            break;
        case '/contact':
            page = fs.readFileSync("./site/contact.html", { encoding: "utf8" });
            res.end(page)
            break;
        default:
            page = fs.readFileSync("./site/404.html", { encoding: "utf8" });
            res.end(page)
            break;
    }
})

server.listen(3000, '127.0.0.1')
