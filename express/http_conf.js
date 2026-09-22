import http from 'http'

const server = http.createServer((req, res) => {
    console.log("Server Responded at http://127.0.0.1:3000");
    if (req.method === 'GET' && req.url === '/')
        res.end("GET REQUEST RECIEVED")
    else if (req.method === 'GET' && req.url === '/')
        res.end("POST REQUEST RECIEVED")
    else if (req.method === 'PATCH' && req.url === '/users')
        res.end("PATCH REQUEST RECIEVED")
    else res.end("The Response")
})

server.listen(3000, '127.0.0.1', () => {
    console.log("Server started !!!")
})