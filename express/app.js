import express from 'express';
import fs from 'fs'

const app = express();

app.get('/', (req, res) => {
  res.send("Home page");
});

app.get('/api/v1/books', (req, res) => {
  let booksData = JSON.parse(fs.readFileSync("./data/books.json", 'utf-8'))
  res.setHeader("content-type", 'application/json');
  res.json({
    status: "success",
    data : {
      books : booksData
    }
  })
});

app.listen(3000, () => {
  console.log(`Server listening on port http://localhost:3000`);
});