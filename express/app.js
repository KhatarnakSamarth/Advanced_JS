import { count } from 'console';
import express from 'express';
import fs from 'fs'
import { type } from 'os';

const app = express();

app.use(express.json())


app.get('/', (req, res) => {
  res.send("Home page");
});

let booksData = JSON.parse(fs.readFileSync("./data/books.json", 'utf-8'))

app.get('/api/v1/books', (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      count: booksData.length,
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

app.get('/api/v1/books/:id', (req, res) => {
  try {
    let id = req.params.id
    let book = booksData.find(book => book.id === id)
    if (!book) {
      res.status(400).json({
        status: "Fail",
        message: `Book not found for id: ${id}`
      })
    }
    else {
      res.status(200).json({
        status: "Success",
        data: {
          book: book
        }
      })
    }
  }
  catch (error) {
    req.status(500).json({
      status: "Fail",
      message: "Error Occured"
    })
  }
})


app.post('/api/v1/books', (req, res)=>{
  booksData.push(req.body)
  fs.writeFileSync('./data/books.json', JSON.stringify(booksData))
  res.status(201).json({
    status : "Success",
    message : "Successfully Added"
  })
})



app.listen(3000, () => {
  console.log(`Server listening on port http://localhost:3000`);
});