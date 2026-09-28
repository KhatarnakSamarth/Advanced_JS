import { count } from 'console';
import express from 'express';
import fs from 'fs'
import { type } from 'os';

const app = express();

app.get('/', (req, res) => {
  res.send("Home page");
});

let booksData = JSON.parse(fs.readFileSync("./data/books.json", 'utf-8'))


app.get('/api/v1/books', (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      count :  booksData.length,
      data: {
        books: booksData
      }
    })
  } catch (error) {
    res.status(404).json({
      status: "404",
      message: "Not Found"
    })
  }

});

app.listen(3000, () => {
  console.log(`Server listening on port http://localhost:3000`);
});