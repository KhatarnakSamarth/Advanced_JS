import express from 'express';
import fs from 'fs'

const app = express();
const port = 3000;

let page = fs.readFileSync("index.html", 'utf-8')

app.get('/', (req, res) => {
  res.setHeader("content-type", 'text/html');
  res.send(page);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});